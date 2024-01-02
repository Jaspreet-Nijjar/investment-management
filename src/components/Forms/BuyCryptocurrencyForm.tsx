import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useGetCoinsQuery } from '../../services/cryptoAPI';
import LoadingSpinner from '../../shared/LoadingSpinner';

const BuyCryptocurrencyForm = () => {
  const { data, isLoading } = useGetCoinsQuery(1);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const BuyCryptoFormSchema = z.object({
    coin: z.string().min(1),
    amount: z
      .number()
      .min(1, { message: 'You must purchase at least one unit' }),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BuyCryptoFormSchema),
  });

  return <div>Form</div>;
};

export default BuyCryptocurrencyForm;
