import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "Todas" },
  { id: "Brasileirão", label: "Brasileirão" },
  { id: "Champions League", label: "Champions League" },
  { id: "Mercado da Bola", label: "Mercado da Bola" },
  { id: "Seleções", label: "Seleções" },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={category.id === selectedCategory ? "default" : "secondary"}
          className="transition-all"
          onClick={() => onSelectCategory(category.id)}
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
