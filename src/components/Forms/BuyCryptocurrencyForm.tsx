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

  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BuyCryptoFormSchema),
  });

  return (
    <div className="flex justify-center items-center pt-32">
      <form
        className="border p-6 border-gray-200 rounded flex flex-col justify-center items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="mb-2 font-bold">Coin</label>
        <Controller
          name="coin"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className="border border-gray-200 rounded w-56 text-center"
            >
              {data?.map((coin) => (
                <option key={coin.name}>{coin.name}</option>
              ))}
            </select>
          )}
        />
        {errors.coin && <p>{errors.coin.message}</p>}

        <label className="mt-10 font-bold">Amount</label>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <>
              <input
                {...field}
                type="number"
                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                className="border border-gray-200 rounded text-center w-56"
              />
              {errors.amount && <p>{errors.amount.message}</p>}
            </>
          )}
        />
      </form>
    </div>
  );
};

export default BuyCryptocurrencyForm;
