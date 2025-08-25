import { create } from "zustand";
import type { Lead } from "@/types/lead";
import type { Filters } from "@/types/filters";
import { leadsData as allLeads } from "@/assets/data/leads";

type LeadsState = {
  leads: Lead[];
  selectedLeads: string[];
  filters: Filters;
  showFilters: boolean;
  page: number;
  pageSize: number;
  setShowFilters: (show: boolean) => void;
  setFilters: (updater: (prev: Filters) => Filters) => void;
  toggleCheckboxFilter: (key: "exportType" | "tags", value: string) => void;
  clearAllFilters: () => void;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
  selectAll: (ids: string[]) => void;
  clearSelection: () => void;
  toggleSelect: (id: string, checked: boolean) => void;
};

export const useLeadsStore = create<LeadsState>((set) => ({
  leads: allLeads,
  selectedLeads: [],
  showFilters: false,
  page: 1,
  pageSize: 5,
  filters: {
    status: [],
    exportType: [],
    tags: [],
    dateRange: "",
    searchQuery: "",
  },
  setShowFilters: (show) => set({ showFilters: show }),
  setFilters: (updater) =>
    set((state) => ({ filters: updater(state.filters), page: 1 })),
  toggleCheckboxFilter: (key, value) =>
    set((state) => {
      const current = state.filters[key];
      const exists = current.includes(value);
      const updated = exists
        ? current.filter((v) => v !== value)
        : [...current, value];
      return {
        filters: { ...state.filters, [key]: updated },
        page: 1,
      } as Partial<LeadsState>;
    }),
  clearAllFilters: () =>
    set({
      filters: {
        status: [],
        exportType: [],
        tags: [],
        dateRange: "",
        searchQuery: "",
      },
      page: 1,
    }),
  setPage: (page) => set({ page }),
  setPageSize: (size) => set({ pageSize: size, page: 1 }),
  selectAll: (ids) => set({ selectedLeads: ids }),
  clearSelection: () => set({ selectedLeads: [] }),
  toggleSelect: (id, checked) =>
    set((state) => ({
      selectedLeads: checked
        ? [...state.selectedLeads, id]
        : state.selectedLeads.filter((x) => x !== id),
    })),
}));
