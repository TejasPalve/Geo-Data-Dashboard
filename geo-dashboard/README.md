Geo-Data-Dashboard
A React-based dashboard to visualize and interact with geospatial and tabular data. Features a responsive data table, interactive map (Leaflet), client-side filtering and sorting, and seamless synchronization between table rows and map markers. Designed to handle large datasets (5k+ rows) efficiently using React hooks and local state.

---

- Features

- Data Table
  - Paginated table fetching data from a mock API (JSON)
  - Columns: Project Name, Latitude, Longitude, Status, Last Updated
  - Sorting and client-side filtering
  - Handles 5k+ rows efficiently

- Map Integration
  - Uses Leaflet to display markers based on latitude/longitude
  - Click table row → highlight marker
  - Click marker → highlight corresponding row

- State Management
  - Local state with React hooks only
  - Proper separation of UI and data logic

- UI/UX
  - Built using **Material-UI (MUI)**
  - Responsive design

---

🏗️ Project Structure
geo-data-dashboard/
│

├─ public/

├─ src/

│ ├─ components/
     
│ │ ├─ DataTable.jsx

│ │ ├─ GeoMap.jsx

│ │ └─ Layout.jsx

│ │

│ ├─ data.js

│ ├─ App.jsx

│ ├─ App.css

│ ├─  main.jsx

│ ├─ App.css

│ └─ index.jsx
├─ index.html
├─ package.json
└─ README.md

