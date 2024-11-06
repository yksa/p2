import { useContext } from "react";
import { PreferenceContext } from "./PreferenceContext";

export const usePreference = () => useContext(PreferenceContext);
