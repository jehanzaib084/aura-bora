'use client';

import { useState } from 'react';
import { z } from 'zod';

// Validation schema
const userDetailsSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  country: z.string().min(1, 'Country is required'),
  phone: z.string().min(1, 'Phone number is required'),
});

export type UserDetails = z.infer<typeof userDetailsSchema>;

interface CheckoutFormProps {
  onSubmit: (details: UserDetails) => void;
  isProcessing: boolean;
}

export default function CheckoutForm({ onSubmit, isProcessing }: CheckoutFormProps) {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof UserDetails, string>>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isProcessing) return;
    const { name, value } = e.target;
    setUserDetails(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof UserDetails]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    try {
      userDetailsSchema.parse(userDetails);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof UserDetails, string>> = {};
        error.errors.forEach(err => {
          const path = err.path[0] as keyof UserDetails;
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm() && !isProcessing) {
      onSubmit(userDetails);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : ''}`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              disabled={isProcessing}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userDetails.phone}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg ${errors.phone ? 'border-red-500' : ''}`}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              disabled={isProcessing}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600">
                {errors.phone}
              </p>
            )}
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
                name="firstName"
                value={userDetails.firstName}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${errors.firstName ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.firstName}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                disabled={isProcessing}
              />
              {errors.firstName && (
                <p id="firstName-error" className="mt-1 text-sm text-red-600">
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${errors.lastName ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.lastName}
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                disabled={isProcessing}
              />
              {errors.lastName && (
                <p id="lastName-error" className="mt-1 text-sm text-red-600">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg ${errors.address ? 'border-red-500' : ''}`}
              aria-invalid={!!errors.address}
              aria-describedby={errors.address ? 'address-error' : undefined}
              disabled={isProcessing}
            />
            {errors.address && (
              <p id="address-error" className="mt-1 text-sm text-red-600">
                {errors.address}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={userDetails.city}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${errors.city ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.city}
                aria-describedby={errors.city ? 'city-error' : undefined}
                disabled={isProcessing}
              />
              {errors.city && (
                <p id="city-error" className="mt-1 text-sm text-red-600">
                  {errors.city}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={userDetails.state}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${errors.state ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.state}
                aria-describedby={errors.state ? 'state-error' : undefined}
                disabled={isProcessing}
              />
              {errors.state && (
                <p id="state-error" className="mt-1 text-sm text-red-600">
                  {errors.state}
                </p>
              )}
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
                name="zipCode"
                value={userDetails.zipCode}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${errors.zipCode ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.zipCode}
                aria-describedby={errors.zipCode ? 'zipCode-error' : undefined}
                disabled={isProcessing}
              />
              {errors.zipCode && (
                <p id="zipCode-error" className="mt-1 text-sm text-red-600">
                  {errors.zipCode}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={userDetails.country}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${errors.country ? 'border-red-500' : ''}`}
                aria-invalid={!!errors.country}
                aria-describedby={errors.country ? 'country-error' : undefined}
                disabled={isProcessing}
              />
              {errors.country && (
                <p id="country-error" className="mt-1 text-sm text-red-600">
                  {errors.country}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
} 