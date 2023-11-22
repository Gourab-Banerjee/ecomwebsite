import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setCurrentPage  } from '../../features/ProductSlice';
import "./ProductListPage.css"

const ProductListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const currentPage = useSelector((state) => state.products.currentPage);
  const itemsPerPage = useSelector((state) => state.products.itemsPerPage);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };


  return (
    <div className='page-main'>
      <div className='page-title-wrapper'>
        <h1>All Products</h1>
      </div>
      <div className='product-items'>
      
      <ul>
        {currentItems.map((product) => (
          <li key={product.id}>
            
            <img className='product-img' src={product.image.url} alt={product.name} />
            <p className='product-name'>{product.name}</p>
            <h4 className='product-price'>KD{product.price.regularPrice.amount.value}</h4>
          </li>
        ))}
      </ul>
      
      </div>

      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
        {'<'}
        </button>
        <span>{currentPage}</span>
        <button onClick={() => paginate(currentPage + 1)} disabled={indexOfLastItem >= products.length}>
        {'>'}
        </button>
      </div><br />

    </div>
  )
}

export default ProductListPage