import FilteringBadge from "./FilteringBadge";
import { useCategories } from "../hooks/useCatrgories";
import { useProductUI } from "../context/ProductUIContext";

export default function CategoryFilterBar() {
    const { data: categories = [] } = useCategories();
    const { state, dispatch } = useProductUI();

    const limited = categories.slice(0, 6);

    const normalized = categories.map((c) => ({
        label: c.name || c,
        value: c.slug || c,
    }));

    const allCategories = [
        { label: "All", value: "all" },
        ...normalized.slice(0, 6),
    ];

    return (
        <div className="flex gap-2 flex-wrap justify-center">
            {allCategories.map((cat) => (
                <FilteringBadge
                    key={cat.value}
                    title={cat.label}
                    active={state.category === cat.value}
                    onClick={() =>
                        dispatch({
                            type: "SET_CATEGORY",
                            payload: cat.value,
                        })
                    }
                />
            ))}
        </div>
    );
}