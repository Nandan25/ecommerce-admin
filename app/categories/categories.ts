export const categories = [
    {
        id: "cat01",
        name: "Electronics",
        description: "Devices, gadgets and more",
    },
    { id: "cat02", name: "Fashion", description: "Clothing and accessories" },
    {
        id: "cat03",
        name: "Home & Kitchen",
        description: "Furniture and appliances",
    },
    {
        id: "cat04",
        name: "Books",
        description: "Fiction, non-fiction, and educational",
    },
    { id: "cat05", name: "Sports", description: "Fitness gear and sportswear" },
];

export const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Description", accessor: "description" }
] as const;