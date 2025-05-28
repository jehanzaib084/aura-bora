'use client';

import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

export type UserDetails = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
};

interface CheckoutFormProps {
  onSubmit: (details: UserDetails) => void;
  isProcessing: boolean;
  onFormStateChange: (isValid: boolean) => void;
}

export default function CheckoutForm({ onSubmit, isProcessing, onFormStateChange }: CheckoutFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserDetails>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      country: '',
      phone: '',
    },
  });

  // Notify parent of form validity
  useEffect(() => {
    onFormStateChange(isValid);
  }, [isValid, onFormStateChange]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email' } })}
              className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : ''}`}
              disabled={isProcessing}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', { required: 'Phone is required' })}
              className={`w-full p-3 border rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
              disabled={isProcessing}
            />
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
          </div>
        </div>
      </div>
      {/* Shipping Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                {...register('firstName', { required: 'First name is required' })}
                className={`w-full p-3 border rounded-lg ${errors.firstName ? 'border-red-500' : ''}`}
                disabled={isProcessing}
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                {...register('lastName', { required: 'Last name is required' })}
                className={`w-full p-3 border rounded-lg ${errors.lastName ? 'border-red-500' : ''}`}
                disabled={isProcessing}
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              {...register('address', { required: 'Address is required' })}
              className={`w-full p-3 border rounded-lg ${errors.address ? 'border-red-500' : ''}`}
              disabled={isProcessing}
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                {...register('city', { required: 'City is required' })}
                className={`w-full p-3 border rounded-lg ${errors.city ? 'border-red-500' : ''}`}
                disabled={isProcessing}
              />
              {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                {...register('state', { required: 'State is required' })}
                className={`w-full p-3 border rounded-lg ${errors.state ? 'border-red-500' : ''}`}
                disabled={isProcessing}
              />
              {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                ZIP Code
              </label>
              <input
                type="text"
                id="zipCode"
                {...register('zipCode', { required: 'ZIP code is required' })}
                className={`w-full p-3 border rounded-lg ${errors.zipCode ? 'border-red-500' : ''}`}
                disabled={isProcessing}
              />
              {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>}
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                {...register('country', { required: 'Country is required' })}
                className={`w-full p-3 border rounded-lg ${errors.country ? 'border-red-500' : ''}`}
                disabled={isProcessing}
              />
              {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>}
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="hidden" />
    </form>
  );
} 