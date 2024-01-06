import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '../../../../components/common/Button';

const BuyCryptocurrencyForm = ({ data }) => {
  const [showPortfolioButton, setShowPortfolioButton] = useState(false);

  const BuyCryptoFormSchema = z.object({
    amount: z
      .number()
      .min(1, { message: 'You must purchase at least one unit' }),
  });

  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BuyCryptoFormSchema),
  });

  return (
    <div className="flex justify-center items-center pt-32">
      <form className="border p-6 border-gray-200 rounded flex flex-col justify-center items-center">
        <label className="mb-2 font-bold">Coin</label>
        <img src={data?.image?.small} alt="" />
        <h1 className="font-bold mt-2 text-xl">{data?.name}</h1>
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

        <div className="flex flex-col gap-4 mt-16">
          <div className="flex gap-4 justify-center">
            <Button type="submit">Add To Portfolio</Button>
            {showPortfolioButton && (
              <Button to="/portfolio">Visit Portfolio</Button>
            )}
          </div>

          <Button to="/cryptocurrencies">View All Cryptocurrencies</Button>
        </div>
      </form>
    </div>
  );
};

export default BuyCryptocurrencyForm;
