// cart.ts
import { ref, computed } from 'vue';

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

const cart = ref<CartItem[]>([]);

const totalItems = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0);
});

const totalPrice = computed(() => {
  return cart.value.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
});

const addToCart = (item: CartItem) => {
  const existingItem = cart.value.find((cartItem) => cartItem._id === item._id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.value.push({ ...item, quantity: 1 });
  }
};

const removeFromCart = (item: CartItem) => {
  const index = cart.value.findIndex((cartItem) => cartItem._id === item._id);
  if (index !== -1) {
    const currentItem = cart.value[index];
    if (currentItem.quantity > 1) {
      currentItem.quantity -= 1;
    } else {
      cart.value.splice(index, 1);
    }
  }
};

const clearCart = () => {
  cart.value = [];
};

const useCartStore = () => {
  return {
    cart,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export { useCartStore };
