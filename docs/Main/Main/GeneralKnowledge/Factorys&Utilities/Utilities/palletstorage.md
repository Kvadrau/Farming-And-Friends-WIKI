---
title: Pallet Storage
---
# Pallet Storage

Pallet Storage is a building used to store and organise pallets. It can separate different products from the same pallet while keeping identical products together.

## Purpose

Pallet Storage is used to:

* Store pallets
* Sort mixed pallets
* Separate different products onto their own pallets
* Keep identical products together
* Create empty pallets

## How to Use

### 1. Place a Pallet Into Storage

Use a **Forklift** to place a pallet into the Pallet Storage building.

The pallet can contain one or multiple types of products.

### 2. Store the Pallet

Once deposited, Pallet Storage sorts the contents based on the product type.

Different products are separated onto their own pallets, while identical products remain together.

### 3. Withdraw the Products

Use the forklift to remove the stored pallets.

Different products that were originally on the same pallet will now be on separate pallets.

For example:

```text
Input:
1 Pallet
├── 5 Wheat Seeds
└── 5 Corn Seeds

Output:
├── Wheat Seed Pallet
│   └── 5 Wheat Seeds
│
└── Corn Seed Pallet
    └── 5 Corn Seeds
```

Identical products remain together:

```text
Input:
1 Pallet
└── 2 Wheat Seeds

Output:
└── Wheat Seed Pallet
    └── 2 Wheat Seeds
```

Pallet Storage **does not split identical products into separate pallets**.

## Cost

| Information    | Details        |
| -------------- | -------------- |
| Purchase Price | 120,000 Coins  |
| Input          | Pallets        |
| Output         | Sorted Pallets |
| Building Size  | 14 × 13        |

## Requirements

* **Forklift License**
* **Forklift**
* **120,000 Coins**
* Pallets to store

## Useful Information & Tips

* Different products on the same pallet are separated when withdrawn.
* Identical products remain together on the same pallet.
* The number of items is not changed when storing them.
* Mixed seed pallets can be separated into individual seed pallets.
* This is useful for organising pallets containing multiple products.
* Empty pallets can be obtained by removing all products from a stored pallet.
* Pallet Storage is especially useful when dealing with large quantities of seeds or factory-produced products.

> **Example:** If a pallet contains **2 Wheat Seeds**, they will come back out as **2 Wheat Seeds on one pallet**, rather than two separate pallets.
