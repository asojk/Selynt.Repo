import React, { ReactNode } from 'react';

interface ContentSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  button?: {
    text: string;
    onClick: () => void;
  };
  customContent?: ReactNode;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  description,
  button,
  customContent,
  className = '',
}) => {
  return (
    <section className={`flex min-h-[50vh] flex-col items-center justify-center py-24 ${className}`}>
      <div className="mx-auto px-6 text-center">
        <h2 className="antialised lg:subpixel-antialiased pb-2 text-2xl font-bold tracking-tight text-a-dark dark:text-s lg:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <h3 className="antialised lg:subpixel-antialiased px-8 md:px-12 lg:px-24 pb-6 text-base text-center text-n-9 dark:text-white md:text-lg lg:text-xl">
            {subtitle}
          </h3>
        )}
        {description && (
          <p className="antialised lg:subpixel-antialiased px-8 md:px-12 lg:px-24 text-sm text-left text-n-9 dark:text-white md:text-base lg:text-lg leading-tight tracking-tight pb-8">
            {description}
          </p>
        )}
        {button && (
          <div className="mt-8">
            <button
              onClick={button.onClick}
              className="inline-block rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-md duration-150 hover:bg-indigo-500 hover:shadow-none active:bg-indigo-700"
            >
              {button.text}
            </button>
          </div>
        )}
        {customContent && <div className="mt-8">{customContent}</div>}
      </div>
    </section>
  );
};

export default ContentSection;