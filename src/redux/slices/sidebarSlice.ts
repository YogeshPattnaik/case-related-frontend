import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { sidebarService, SidebarMenuItem } from '../../services/sidebarService';

interface SidebarState {
  menuItems: SidebarMenuItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SidebarState = {
  menuItems: [],
  isLoading: false,
  error: null,
};

export const fetchSidebarMenu = createAsyncThunk(
  'sidebar/fetchMenu',
  async () => {
    const response = await sidebarService.getSidebarMenu();
    return response.menu;
  }
);

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    clearSidebar: (state) => {
      state.menuItems = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSidebarMenu.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSidebarMenu.fulfilled, (state, action: PayloadAction<SidebarMenuItem[]>) => {
        state.isLoading = false;
        state.menuItems = action.payload;
      })
      .addCase(fetchSidebarMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Failed to fetch sidebar menu';
      });
  },
});

export const { clearSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer; 