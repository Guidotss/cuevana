import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

export const useForm = (intialState = "") => {
  const [input, setInput] = useState(intialState);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setInput(target.value);
  };

  const onSubmit = () => {
    if (input.trim().length === 0) return;

    router.push(`/search/${input}`);
    setInput(intialState);
    setLoading(true);
  };

  return {
    input,
    loading,

    handleChange,
    onSubmit,
  };
};
