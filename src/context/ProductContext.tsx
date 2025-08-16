"use client";

import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const ProductContext = createContext<any>(undefined);

export const ProductWrapper = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [currentSeller, setCurrentSeller] = useState<string | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [coupons, setCoupons] = useState([]);
  // Inside your ProductContext
const [searchedProducts, setSearchedProducts] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
  });
  const [sellers, setSellers] = useState([]);

  // Fetch all products (no pagination)
  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api/v1/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch all products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Modify fetchPaginatedProducts to update currentCategory
  const fetchPaginatedProducts = async (
    page = 1,
    limit = 8,
    category?: string
  ) => {
    try {
      setLoading(true);
      let url = `http://localhost:3000/api/v1/products/page/${page}/limit/${limit}`;
      if (category) {
        url += `?category=${category}`;
      }
      const res = await axios.get(url);
      setProducts(res.data.products);
      setPagination({
        currentPage: res.data.page,
        totalPages: res.data.totalPages,
        totalCount: res.data.totalCount,
      });
      setCurrentCategory(category ?? null); // <-- update here
      setCurrentSeller(null); // clear seller filter on paginated fetch
    } catch (error) {
      console.error("Failed to fetch paginated products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Search products by name (partial/full)
  // const searchProductsByName = async (name: string) => {
  //   try {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `http://localhost:3000/api/v1/products/search/${name}`
  //     );
  //     setProducts(res.data);
  //   } catch (error) {
  //     console.error("Failed to fetch products by name:", error);
  //     setProducts([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Modify fetchProductsBySellerId to update currentSeller and clear currentCategory
  const fetchProductsBySellerId = async (sellerId: string) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:3000/api/v1/products/seller/${sellerId}`
      );
      setProducts(res.data);
      setCurrentSeller(sellerId);
      setCurrentCategory(null);
      setPagination({
        currentPage: 1,
        totalPages: 1,
        totalCount: res.data.length,
      });
    } catch (error) {
      console.error("Failed to fetch products by sellerId:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // Create new product
  const createProduct = async (data: any) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/v1/products",
        data
      );
      return res.data;
    } catch (error) {
      console.error("Failed to create product:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Get product by id
  const getProductById = async (id: number) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:3000/api/v1/products/${id}`
      );
      // console.log("WORKING : =========================", res);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch product by ID:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update product by id
  const updateProductById = async (id: number, data: any) => {
    // console.log("ID : ", id);
    // console.log("DATA : ", data);

    try {
      setLoading(true);

      const res = await axios.patch(
        `http://localhost:3000/api/v1/products/${id}`,
        data
      );
      return res.data;
    } catch (error) {
      console.error("Failed to update product by ID:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Delete product by id
  const deleteProductById = async (id: number) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3000/api/v1/products/${id}`);
      // Refresh product list after deletion
      await fetchPaginatedProducts(pagination.currentPage);
    } catch (error) {
      console.error("Failed to delete product:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Fetch all sellers
  const fetchAllSellers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api/v1/users/sellers");
      setSellers(res.data);
    } catch (error) {
      console.error("Failed to fetch sellers:", error);
      setSellers([]);
    } finally {
      setLoading(false);
    }
  };

const fetchAllCategories = async () => {
  try {
    setLoading(true);
    const res = await axios.get("http://localhost:3000/api/v1/categories");
    setCategories(res.data); // Assuming res.data is an array of categories with id and name
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    setCategories([]);
  } finally {
    setLoading(false);
  }
};

  /* Create Category */
  // Create new category
  const createCategory = async (data: any) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/v1/categories",
        data
      );
      // Optionally, refresh categories after creation
      await fetchAllCategories();
      return res.data;
    } catch (error) {
      console.error("Failed to create category:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchAllCoupons = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api/v1/coupons");
      setCoupons(res.data);
    } catch (error) {
      console.error("Failed to fetch coupons:", error);
      setCoupons([]);
    } finally {
      setLoading(false);
    }
  };

  // Delete coupon by id
  const deleteCouponById = async (id: number) => {
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3000/api/v1/coupons/${id}`);
      // Refresh coupons after deletion
      await fetchAllCoupons();
    } catch (error) {
      console.error("Failed to delete coupon:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Create new coupon
  const createCoupon = async (data: any) => {
    console.log(data);

    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/v1/coupons",
        data
      );
      // Refresh coupons after adding
      await fetchAllCoupons();
      return res.data;
    } catch (error) {
      console.error("Failed to add coupon:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Get category by id
  const getCategoryById = async (id: string) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:3000/api/v1/categories/${id}`
      );
      console.log("Fetched Category by ID:", res.data);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch category by ID:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateCategoryById = async (id: string, data: any) => {
    try {
      setLoading(true);

      const res = await axios.patch(
        `http://localhost:3000/api/v1/categories/${id}`,
        data
      );
      return res.data;
    } catch (error) {
      console.error("Failed to update category by ID:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getCouponById = async (id: string) => {
  try {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:3000/api/v1/coupons/${id}`
    );
    console.log("Fetched coupon by ID:", res);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch coupon by ID:", error);
    throw error;
  } finally {
    setLoading(false);
  }
};

const updateCouponById = async (id: string, data: any) => {
  try {
    setLoading(true);

    const res = await axios.put(
      `http://localhost:3000/api/v1/coupons/${id}`,
      data
    );
    console.log("Coupon updated:", res.data);
    return res.data;
  } catch (error) {
    console.error("Failed to update coupon by ID:", error);
    throw error;
  } finally {
    setLoading(false);
  }
};

const deleteCategoryById = async (id: string) => {
  try {
    setLoading(true);
    await axios.delete(`http://localhost:3000/api/v1/categories/${id}`);
    // Optional: Refresh categories list if you're displaying it somewhere
    await fetchAllCategories(); // Uncomment if you have this
  } catch (error) {
    console.error("Failed to delete category:", error);
    throw error;
  } finally {
    setLoading(false);
  }
};

// Get category by name
const getCategoryByName = async (name: string) => {
  try {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:3000/api/v1/categories/name/${encodeURIComponent(name)}`
    );
    console.log("Fetched Category by Name:", res.data);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch category by name:", error);
    throw error;
  } finally {
    setLoading(false);
  }
};

const fetchProductsByCategoryId = async (categoryId: string) => {
  try {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:3000/api/v1/products/category/${categoryId}`
    );
    setProducts(res.data);
    setCurrentCategory(categoryId); // optional: store the ID
    setCurrentSeller(null); // optional: reset seller filter
    setPagination({
      currentPage: 1,
      totalPages: 1,
      totalCount: res.data.length,
    });
  } catch (error) {
    console.error("Failed to fetch products by category ID:", error);
    setProducts([]);
  } finally {
    setLoading(false);
  }
};

const searchProductsByName = async (name: string) => {
  try {
    setLoading(true);
    const res = await axios.get(
      `http://localhost:3000/api/v1/products/search/by-name`,
      {
        params: { name },
      }
    );
    setSearchedProducts(res.data);
  } catch (error) {
    console.error("Failed to fetch product by name:", error);
    throw error;
  } finally {
    setLoading(false);
  }
};

// Get product by UUID (string)
const getProductByUuid = async (id: string) => {
  try {
    setLoading(true);
    const res = await axios.get(`http://localhost:3000/api/v1/products/${id}`);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch product by UUID:", error);
    throw error;
  } finally {
    setLoading(false);
  }
};

const searchProductById = async (productId: string) => {
  try {
    setLoading(true);
    const res = await axios.get(`http://localhost:3000/api/v1/products/${productId}`);
    setProducts([res.data]); // Wrap in array for consistency with product list
    setPagination({
      currentPage: 1,
      totalPages: 1,
      totalCount: 1,
    });
  } catch (error) {
    console.error("Failed to fetch product by ID:", error);
    setProducts([]);
  } finally {
    setLoading(false);
  }
};

  // Expose currentCategory, currentSeller, and setters in context value:
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        pagination,
        sellers,
        currentCategory,
        currentSeller,
        categories, // ✅ add this
        setCurrentCategory,
        setCurrentSeller,
        fetchAllProducts,
        fetchPaginatedProducts,
        searchProductsByName,
        fetchProductsBySellerId,
        createProduct,
        getProductById,
        updateProductById,
        deleteProductById,
        fetchAllSellers,
        fetchAllCategories, // ✅ add this
        createCategory, // ✅ add this
        coupons,
        fetchAllCoupons,
        deleteCouponById, // ✅ add this
        createCoupon, // ✅ use createCoupon instead of addCoupon
        getCategoryById,
        updateCategoryById,
        getCouponById,
        updateCouponById,
        deleteCategoryById,
        getCategoryByName,
        fetchProductsByCategoryId,
        searchedProducts,
        setSearchedProducts,
        getProductByUuid,
            searchProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export function useProductContext() {
  return useContext(ProductContext);
}
