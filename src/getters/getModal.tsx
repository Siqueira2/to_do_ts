import { useGetter } from "@/hooks/useGetter";

export const getModal = () => useGetter((state) => state.modalReducer.modal);
