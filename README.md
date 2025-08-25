# Dashboard – React + Tailwind + shadcn/ui + Zustand

A small dashboard built to match a Figma design. Simple, clean, and responsive.

Figma: https://www.figma.com/design/05pOh0OMulkdMN9Zp2DQbp/Tap-Task?node-id=2-10035&t=CAMUNqTgGYKoOqYC-0

## Goal

- Follow the Figma layout and components
- Use TailwindCSS + shadcn/ui
- Use Zustand for state
- No backend (mock data only)
- Fully responsive (desktop + mobile)

## What’s done

- Leads page
  - Table with name, email, tags, connected user, date, export icons
  - Search and filters (export type, tags)
  - Pagination (5 rows per page)
  - Row select + Select All (current page only)
  - Tags “+N” opens a simple modal (rendered once at parent)
- Data & types
  - Mock leads in `src/assets/data/leads.ts`
  - Shared types in `src/types/*`
- State (Zustand)
  - `src/store/leadsStore.ts` stores filters, selected rows, page, pageSize, filter panel state
  - Page resets to 1 on filter change or clear
- UI structure
  - `LeadsFiltersButton` + `LeadsFiltersContent` for filter UI
  - `LeadRow` for row rendering
  - `Pagination` component in `src/components/ui/pagination.tsx`
- Sidebar polish
  - Dismissible onboarding card (shows on first visit/reload, close with X)
  - Verified badge + avatar; safe bottom spacing so the card doesn’t hide

## Tech stack

- React + Vite + TypeScript
- TailwindCSS
- shadcn/ui
- Zustand
- Lucide Icons
- Custom SVG Icons

## Quick structure

- `src/components/dashboard/LeadsTable.tsx` – table shell
- `src/components/dashboard/LeadsFiltersPanel.tsx` – filter button + panel
- `src/components/dashboard/LeadRow.tsx` – one row
- `src/components/ui/pagination.tsx` – tiny pagination
- `src/components/layout/*` – layout, header, sidebar
- `src/assets/data/leads.ts` – mock data
- `src/types/*` – `Lead`, `Filters`
- `src/store/leadsStore.ts` – Zustand store

## Notes

- No env vars needed
- To switch to a public API, fetch on load, map to `Lead`, and set in the store
