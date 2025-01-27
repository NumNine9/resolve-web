import { type AuthUser } from 'wasp/auth';
import { FormEvent } from 'react';
import toast from 'react-hot-toast';
import Breadcrumb from '../../layout/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { useRedirectHomeUnlessUserIsAdmin } from '../../useRedirectHomeUnlessUserIsAdmin';
import AddItemPage from '../../../client/pages/AddItemPage';

const AddProduct = ({ user }: { user: AuthUser }) => {
  useRedirectHomeUnlessUserIsAdmin({ user });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // TODO add toast provider / wrapper
    event.preventDefault();
    const confirmed = confirm('Are you sure you want to save the changes?');
    if (confirmed) {
      toast.success('Your changes have been saved successfully!');
    } else {
      toast.error('Your changes have not been saved!');
    }
  };
  async function addProduct() {
    try {
      // Define the product data
      const productData = {
        name: 'Example Product',
        description: 'This is an example product for the marketplace.',
        price: 29.99,
        isAvailable: true,
        imageUrl: 'https://example.com/product-image.jpg',
        stockQuantity: 10,
        tags: ['electronics', 'gadgets'],
        userId: 'USER_ID_HERE', // Replace with the ID of the user listing the product
        categoryId: 'CATEGORY_ID_HERE', // Replace with the ID of the category (optional)
      };
  
      // Add the product to the database
    //   const newProduct = await prisma.product.create({
    //     data: productData,
    //   });
  
      console.log('Product added successfully:, newProduct');
    } catch (error) {
      console.error('Error adding product:', error);
    } 
  }

  return (
    <DefaultLayout user={user}>
      <div className='mx-auto max-w-270'>
        <Breadcrumb pageName='Add Product' />

       <AddItemPage/>
      </div>
    </DefaultLayout>
  );
};

export default AddProduct;
