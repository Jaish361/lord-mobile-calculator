import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CategoryId, Currency, Item, SavedOrder } from '../types';
import { calculateSpeedupDuration, calculateTotalGems } from '../utils/calculations';
import { generateOrderId } from '../utils/formatters';

interface CartState {
  items: CartItem[];
  selectedCategory: CategoryId;
  searchQuery: string;
  currency: Currency;
  isCartDrawerOpen: boolean;
  activeOrderId: string;
  savedOrders: SavedOrder[];

  // Actions
  setQuantity: (item: Item, quantity: number) => void;
  incrementItem: (item: Item) => void;
  decrementItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  setSelectedCategory: (category: CategoryId) => void;
  setSearchQuery: (query: string) => void;
  setCurrency: (currency: Currency) => void;
  setIsCartDrawerOpen: (isOpen: boolean) => void;
  regenerateOrderId: () => void;
  saveCurrentOrder: () => SavedOrder | null;
  removeSavedOrder: (orderId: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      selectedCategory: 'speed-ups',
      searchQuery: '',
      currency: 'USD',
      isCartDrawerOpen: false,
      activeOrderId: generateOrderId(),
      savedOrders: [],

      setQuantity: (item: Item, quantity: number) => {
        const cleanQty = Math.max(0, Math.floor(quantity));
        const currentItems = get().items;
        const existingIndex = currentItems.findIndex(i => i.id === item.id);

        if (cleanQty <= 0) {
          if (existingIndex !== -1) {
            set({ items: currentItems.filter(i => i.id !== item.id) });
          }
          return;
        }

        if (existingIndex !== -1) {
          const updated = [...currentItems];
          updated[existingIndex] = { ...updated[existingIndex], quantity: cleanQty };
          set({ items: updated });
        } else {
          set({ items: [...currentItems, { ...item, quantity: cleanQty }] });
        }
      },

      incrementItem: (item: Item) => {
        const currentItems = get().items;
        const existing = currentItems.find(i => i.id === item.id);
        const currentQty = existing ? existing.quantity : 0;
        get().setQuantity(item, currentQty + 1);
      },

      decrementItem: (itemId: string) => {
        const currentItems = get().items;
        const existing = currentItems.find(i => i.id === itemId);
        if (!existing) return;
        get().setQuantity(existing, existing.quantity - 1);
      },

      removeItem: (itemId: string) => {
        set({ items: get().items.filter(i => i.id !== itemId) });
      },

      clearCart: () => {
        set({
          items: [],
          activeOrderId: generateOrderId(),
        });
      },

      setSelectedCategory: (selectedCategory: CategoryId) => {
        set({ selectedCategory });
      },

      setSearchQuery: (searchQuery: string) => {
        set({ searchQuery });
      },

      setCurrency: (currency: Currency) => {
        set({ currency });
      },

      setIsCartDrawerOpen: (isCartDrawerOpen: boolean) => {
        set({ isCartDrawerOpen });
      },

      regenerateOrderId: () => {
        set({ activeOrderId: generateOrderId() });
      },

      saveCurrentOrder: () => {
        const items = get().items.filter(i => i.quantity > 0);
        if (items.length === 0) return null;

        const newOrder: SavedOrder = {
          id: get().activeOrderId,
          createdAt: new Date().toISOString(),
          items: [...items],
          totalGems: calculateTotalGems(items),
          speedupDuration: calculateSpeedupDuration(items),
          status: 'ready',
        };

        const existingOrders = get().savedOrders.filter(o => o.id !== newOrder.id);
        set({
          savedOrders: [newOrder, ...existingOrders].slice(0, 25), // keep last 25 orders
        });

        return newOrder;
      },

      removeSavedOrder: (orderId: string) => {
        set({
          savedOrders: get().savedOrders.filter(o => o.id !== orderId),
        });
      },
    }),
    {
      name: 'heroism_cart_storage_v1',
      partialize: state => ({
        items: state.items,
        currency: state.currency,
        savedOrders: state.savedOrders,
      }),
    }
  )
);
