import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { IHeaderProps } from "../../types/Header";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18n from "i18next"; // You can import i18next or use the mock

// Set up i18next for testing
i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          'header.projects': 'Projects',
          'header.experience': 'Experience',
          'header.contact': 'Contact',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
  });

describe('render Header', () => {
  it('renders correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Header containerRef={null as unknown as IHeaderProps['containerRef']} />
      </I18nextProvider>
    );

    // Check if elements are rendered correctly
    expect(screen.getByText('Cléber Severo')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
