// productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.post("/graphql", {
        query: `{
              products(search: "", pageSize: 200) {
                items {
                  id
                  name
                  sku
                  price {
                    regularPrice {
                      amount {
                        value
                        currency
                      }
                    }
                  }
                  image {
                    url
                  }
                }
              }
            }`,
      });
      return response.data.data.products.items;
    } catch (error) {
      console.log("Error while fetching data from API ");
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    currentPage: 1,
    itemsPerPage: 8, // Set the number of items per page
  },
  reducers: {
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export const { setCurrentPage } = productSlice.actions;
export default productSlice.reducer;
