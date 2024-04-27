"use client";

interface ErrorPageProps {
  error: {
    message: string;
  };
}

export default function ErrorPage({ error }: ErrorPageProps) {
  return <h1>Oops, problem occured. {error.message}</h1>;
}
