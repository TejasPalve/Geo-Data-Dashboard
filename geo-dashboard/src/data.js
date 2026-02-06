// src/data.js
export const mockData = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  projectName: `Project ${i + 1}`,
  lat: 40 + Math.random() * 10,
  lng: -74 + Math.random() * 10,
  status: i % 3 === 0 ? "Active" : "Pending",
  lastUpdated: new Date().toLocaleDateString(),
}));