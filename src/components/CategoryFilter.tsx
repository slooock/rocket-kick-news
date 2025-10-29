import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "Todas" },
  { id: "brasileirao", label: "Brasileirão" },
  { id: "champions", label: "Champions League" },
  { id: "transfer", label: "Mercado da Bola" },
  { id: "international", label: "Seleções" },
];

const CategoryFilter = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={category.id === "all" ? "default" : "secondary"}
          className="transition-all"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
