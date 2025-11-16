# 🎁 Sham Gift Box Constructor

A modern interactive **gift box constructor** built with **React + TypeScript + TailwindCSS**.
Users can choose box color and size, browse product categories, add items to the box, and see a live preview with total price calculation.

---

## 🚀 Features

### 🔧 Sidebar With Hover/Click Behavior
- Hover to temporarily open the panel
- Click to pin it open
- Smooth open/close animation
- Categories like Box, Items, Flowers, Candy, Cards, and more

### 📦 Gift Box Customizer
Users can adjust:
- **Box Color** (white, pink, kraft, black)
- **Box Size** (small, medium, large)
- Box preview dynamically updates its:
  - background color
  - border
  - physical size (visual scaling)

### 🛍 Product Selection
- Products are displayed based on the active category
- Clicking an item adds it to the box
- Right-side preview shows items in a responsive grid
- Clean, simple visual layout

### 💰 Total Price Calculation
- Calculates the sum of selected product prices
- Adds an extra cost for box size
- Summary panel displays:
  - items total
  - box price
  - final total amount

---

## 🎨 UI Logic Overview

### Sidebar Behavior
- Hover ➝ open panel
- Mouse leave ➝ close (if not pinned)
- Click ➝ pin open
- Click again ➝ close
- Smooth transitions using Tailwind animations

### Panel Content
- Dynamically shows items filtered by category
- Image-based grid layout
- Each item adds to the constructor with one click

### GiftBox Component
- Real-time preview of the gift box
- Resizable canvas depending on selected box size
- Color changes instantly
- Bottom settings panel includes:
  - color selection
  - size selection
  - total summary box

---

## 🛠 Installation & Running

```sh
npm install
npm run dev
