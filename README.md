Geo Data Dashboard — React

A React-based Geo Data Dashboard that consumes and visualizes spatial and tabular data. The application demonstrates efficient handling of large datasets, map visualization, and synchronized interaction between a data table and geographic markers.

Overview

This dashboard displays project data containing geographic coordinates in a paginated table and visualizes the same data on an interactive map. Users can interact with both the table and map, and selections stay synchronized between the two views.

The goal of this project is to demonstrate:

Clean React component architecture

Efficient rendering of large datasets (5000+ rows)

Map and UI synchronization

Separation of UI and data logic

Maintainable and readable code

Features
Data Table

Displays paginated project data

Columns:

Project Name

Latitude

Longitude

Status

Last Updated

Client-side sorting

Filtering support

Handles large datasets without lag

Map Integration

Built using React Leaflet

Markers plotted using latitude and longitude

Clicking a table row highlights the map marker

Clicking a map marker highlights the table row

State Management

Local React state only (no Redux)

Centralized synchronization handled in App component

Minimal re-renders for performance

Tech Stack

React (Vite)

Material UI for interface components

React Leaflet for map rendering

JavaScript (ES6+)

CSS

Folder Structure
geo-dashboard
│
├── public
│
├── src
│   ├── components
│   │   ├── DataTable.jsx      # Table rendering, sorting, filtering
│   │   ├── GeoMap.jsx         # Map + marker visualization
│   │   └── Layout.jsx         # UI layout wrapper
│   │
│   ├── data.js                # Mock dataset
│   ├── App.jsx                # State coordination & sync logic
│   ├── main.jsx               # Application entry point
│   ├── App.css
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

Architecture Decisions

The application is divided into focused components:

DataTable handles tabular UI and interactions

GeoMap manages geographic visualization

Layout provides structure

App coordinates shared state

This structure ensures separation of concerns, easier maintenance, and scalability.

Synchronization is achieved through shared state:

Table selection → updates selected item → map marker highlights
Marker click → updates selected item → table row highlights

Performance Strategy

To support large datasets:

Client-side pagination limits rendered rows

Efficient filtering and sorting

Controlled React re-renders

Lightweight marker rendering

These optimizations ensure smooth performance even with thousands of entries.

Installation

Clone the repository:

git clone <your-repo-url>

Navigate into the project:

cd geo-dashboard

Install dependencies:

npm install

Run development server:

npm run dev

Open in browser:

http://localhost:5173

Screenshots

Add screenshots or recordings inside a folder such as:

screenshots/table-view.png
screenshots/map-view.png

Then reference them in this README if desired.

Time Spent

Architecture planning — 1 hour
Table implementation — 2 hours
Map integration — 2 hours
Synchronization logic — 1 hour
Performance tuning — 1 hour
Documentation — 30 minutes

Total — approximately 7.5 hours

Evaluation Focus

This project demonstrates:

Component decomposition

Handling of large datasets

Map and UI synchronization

Clean, readable code

Practical dashboard architecture

Future Enhancements

Virtualized table rendering

Marker clustering

Server-side pagination

Advanced filtering

Map animations

Author

Tejas Palve
