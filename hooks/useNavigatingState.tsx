import { useRouter } from 'expo-router';

const useNavigateWithState = () => {
  const router = useRouter();

  const navigateWithParams = (pathname: string, params: { [key: string]: string | boolean }) => {
    // Convert boolean values to strings
    const formattedParams = Object.entries(params).reduce((acc, [key, value]) => {
      acc[key] = typeof value === 'boolean' ? String(value) : value;
      return acc;
    }, {} as { [key: string]: string });

    const queryString = new URLSearchParams(formattedParams).toString();

    router.push(`${pathname}?${queryString}`);
  };

  return { navigateWithParams };
};

export default useNavigateWithState;
