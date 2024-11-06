'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mwpkobog')
  if (state.succeeded) {
    return (
      <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
        Thanks for reaching out!
      </p>
    )
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-8'>
      <div>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Your email
        </label>
        <input
          id='email'
          type='email'
          name='email'
          className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
          placeholder='you@example.com'
          required
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>

      <div>
        <label
          htmlFor='subject'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          Subject
        </label>
        <input
          id='subject'
          type='text'
          name='subject'
          className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
          placeholder='How I can help you'
          required
        />
      </div>

      <div className='sm:col-span-2'>
        <label
          htmlFor='message'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
        >
          Your message
        </label>
        <textarea
          id='message'
          name='message'
          rows='6'
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
          placeholder='Leave a comment...'
          required
        ></textarea>
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
      </div>

      <button
        type='submit'
        disabled={state.submitting}
        className='py-3 px-5 text-sm font-medium text-center bg-blue-900 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
      >
        Send message
      </button>
    </form>
  )
}
