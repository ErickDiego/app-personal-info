'use client';

import { useCallback } from 'react';
import { usePortfolioData } from '@/lib/usePortfolioData';
import { portfolioService } from '@/lib/portfolioService';
import { Contact, Personal } from '@/types/portfolio';

export function ContactSection() {
  const contactsFetcher = useCallback(() => portfolioService.getContacts(), []);
  const personalFetcher = useCallback(() => portfolioService.getPersonal(), []);
  
  const { data: contacts, loading: contactsLoading } = usePortfolioData(contactsFetcher);
  const { data: personal } = usePortfolioData(personalFetcher);

  if (contactsLoading) {
    return (
      <section className="w-full py-16 px-4 sm:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Ponte en Contacto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-40 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const contactList = contacts as Contact[];
  const personalData = personal as Personal;

  return (
    <section className="w-full py-16 px-4 sm:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Ponte en Contacto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactList?.map((contact) => (
            <a
              key={contact.type}
              href={contact.url}
              target={contact.type !== "email" ? "_blank" : undefined}
              rel={contact.type !== "email" ? "noopener noreferrer" : undefined}
              className="block"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {contact.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 break-all">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {personalData && (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              ¿Interesado en trabajar juntos?
            </p>
            <a
              href={`mailto:${personalData.email}`}
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Enviar Mensaje
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
