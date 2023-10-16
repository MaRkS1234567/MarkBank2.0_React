import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import authService from "../../../services/auth.service";

export const useAuthPage = () => {
  const [type, setType] = useState("auth");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const { mutate, isLoading } = useMutation(
    ["auth"],
    ({ email, password }) => authService.main(type, email, password),
    {
      onSuccess: (data) => {
        setIsAuth(true);
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    mutate(data);
  };

  return useMemo(
    () => ({
      setType,
      register,
      handleSubmit,
      errors,
      isLoading,
      onSubmit,
    }),
    [errors, isLoading]
  );
};
