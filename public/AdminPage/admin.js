// admin.js
document.addEventListener("DOMContentLoaded", () => {
    const addProductForm = document.getElementById('add-product-form');
    const productList = document.getElementById('product-list');
    const logoffBtn = document.getElementById('logoff-btn');

    // Check if user is an admin
    const isAdmin = localStorage.getItem('isAdmin');  // Assuming 'isAdmin' is set after login

    if (!isAdmin) {
        alert("You must be an admin to access this page.");
        window.location.href = '/';  // Redirect to home page
    }

    // Fetch products from backend API
    function loadProducts() {
        fetch('http://localhost:3000/api/admin/products', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`  // Assuming JWT token
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success && data.products.length > 0) {
                    productList.innerHTML = '';
                    data.products.forEach(product => {
                        const productItem = document.createElement('div');
                        productItem.classList.add('product-item');
                        productItem.innerHTML = `
                            <div>
                                <h4>${product.name}</h4>
                                <p>${product.description}</p>
                                <p>$${product.price}</p>
                            </div>
                            <button class="delete-product-btn" data-product-id="${product.id}">Delete</button>
                        `;
                        productList.appendChild(productItem);
                    });

                    // Add event listeners for delete buttons
                    document.querySelectorAll('.delete-product-btn').forEach(btn => {
                        btn.addEventListener('click', handleDeleteProduct);
                    });
                } else {
                    productList.innerHTML = '<p>No products found.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                productList.innerHTML = '<p>Error loading products.</p>';
            });
    }

    // Handle product addition
    addProductForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const productData = {
            name: addProductForm.name.value,
            price: addProductForm.price.value,
            description: addProductForm.description.value
        };

        fetch('http://localhost:3000/api/admin/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`  // Assuming JWT token
            },
            body: JSON.stringify(productData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Product added successfully');
                    loadProducts();  // Reload the product list
                } else {
                    alert('Failed to add product');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    // Handle product deletion
    function handleDeleteProduct(event) {
        const productId = event.target.dataset.productId;

        fetch(`http://localhost:3000/api/admin/delete-product/${productId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`  // Assuming JWT token
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Product deleted successfully');
                    loadProducts();  // Reload the product list
                } else {
                    alert('Failed to delete product');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    // Log off functionality
    logoffBtn.addEventListener('click', () => {
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('token');
        window.location.href = '/';  // Redirect to homepage or login page
    });

    // Initial product load
    loadProducts();
});
