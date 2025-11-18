# Design Guidelines: Assaí Credit Card Landing Page

## Design Approach
**Reference-Based**: Brazilian e-commerce/fintech landing pages (Nubank, Mercado Pago) with bold CTAs and trust-building elements. Focus on conversion optimization with clear value proposition and immediate action prompts.

## Color System
- **Primary Gradient**: Orange to Yellow (#E89641 → #F5C344) for headers, CTAs, and brand elements
- **Accent Blue**: #1E4D8B for headlines and key text
- **Neutrals**: White backgrounds, dark gray (#2D2D2D) for body text
- **Success Green**: #28A745 for approval/benefit indicators
- **Trust Badge Gray**: #F8F9FA for badge backgrounds

## Typography
- **Headlines**: Bold sans-serif (Montserrat Bold or Poppins Bold), 2.5rem-4rem
- **Subheadings**: Semi-bold, 1.5rem-2rem in blue accent
- **Body**: Regular sans-serif (Inter or Open Sans), 1rem-1.125rem
- **CTA Buttons**: Bold uppercase, 1.125rem with letter-spacing
- **Brazilian Portuguese throughout**

## Layout System
- **Spacing Units**: Tailwind 4, 6, 8, 12, 16 for consistent rhythm
- **Container**: max-w-6xl for content sections
- **Section Padding**: py-12 mobile, py-20 desktop
- **Grid**: Single column mobile, 2-3 columns desktop for benefits

## Page Structure

### 1. Header/Hero Section (80vh)
- **Gradient Background**: Orange-to-yellow diagonal gradient
- **Assaí Logo**: Top left, white version on gradient
- **Headline**: "Cartão Assaí Aprovado para Negativados!" - Bold, large, blue text with slight shadow for contrast
- **Subheadline**: "Sem consulta ao SPC/Serasa • Aprovação Imediata"
- **Hero Image**: Right-aligned (desktop) showing happy Brazilian customers holding credit card with approval checkmark overlay
- **CTA Button**: Prominent gradient button "SOLICITAR MEU CARTÃO AGORA" with subtle shadow, blurred background overlay if on image

### 2. Benefits Section (3-column grid desktop)
Each benefit card with:
- **Icon**: Check circle or relevant symbol in gradient colors
- **Title**: Bold, blue text
- **Description**: Short, benefit-focused copy
- **Benefits Include**:
  - Sem consulta SPC/Serasa
  - Aprovação em minutos
  - Limite de até R$ 5.000
  - Aceito em todo Brasil
  - Zero anuidade primeiro ano
  - Programa de cashback

### 3. How It Works Section
- **3-step process** with numbered icons in gradient
- **Step Cards**: Icon → Title → Brief description
- Steps: 1) Preencha o formulário 2) Receba aprovação 3) Use seu cartão
- Visual connection lines between steps on desktop

### 4. Trust & Security Section
- **2-column layout** with badges
- **Left**: "100% Seguro" badge with padlock icon
- **Right**: "Proteção de Dados" badge with shield icon
- **Background**: Light gray (#F8F9FA)
- **Additional trust elements**: Bank seals, SSL certification, customer count

### 5. Social Proof/Testimonials
- **2-3 testimonial cards** with customer photos
- **Star ratings** (5 stars in gradient colors)
- **Customer name** and brief quote about approval experience
- Focus on "negativados" who were approved

### 6. Final CTA Section
- **Full-width gradient background** matching hero
- **Large headline**: "Solicite Agora Seu Cartão Assaí"
- **Urgency element**: "Últimas vagas para aprovação garantida hoje"
- **CTA Button**: Extra large, centered, gradient with white text

### 7. Footer
- **Dark background** (#2D2D2D)
- **Assaí logo** in white
- **Quick links**: Termos, Privacidade, FAQ, Contato
- **Disclaimer**: Small print about credit approval conditions
- **Contact info**: Phone, email, business hours

## Component Specifications

### CTA Buttons
- **Primary**: Orange-yellow gradient, white bold text, rounded-lg, px-8 py-4
- **Hover state**: Slightly darker gradient, subtle lift shadow
- **Icon**: Right-pointing arrow or chevron

### Cards
- **White background** with subtle shadow
- **Rounded corners**: rounded-xl
- **Padding**: p-6 to p-8
- **Border**: Optional 1px light gray on hover

### Icons
- **Library**: Heroicons via CDN
- **Style**: Solid filled for emphasis, outline for secondary elements
- **Size**: 24px-32px for benefit icons, 48px for section icons
- **Color**: Gradient fill where possible

## Images

### Hero Image
**Description**: Professional photo of diverse Brazilian customers (2-3 people) smiling and holding physical Assaí credit card. One person showing approval notification on phone screen with green checkmark. Warm, inviting lighting. Casual-professional attire. Shopping/retail environment background (blurred).
**Placement**: Right 50% of hero section on desktop, below headline on mobile
**Style**: Authentic, high-quality stock photo, not overly staged

### Testimonial Photos
**Description**: Headshot photos of real-looking Brazilian customers, diverse ages and backgrounds
**Placement**: Small circular images (64px-80px) in testimonial cards
**Style**: Natural, friendly expressions

## Responsive Behavior
- **Desktop (1024px+)**: Multi-column layouts, side-by-side hero
- **Tablet (768px-1023px)**: 2-column grids, stacked hero
- **Mobile (<768px)**: Single column, full-width buttons, larger touch targets (min 44px)

## Accessibility
- **Contrast ratios**: WCAG AA compliant (blue text on white, white on gradient)
- **Form labels**: Clear, visible, associated with inputs
- **Focus states**: Visible outline on interactive elements
- **Alt text**: Descriptive for all images
- **Language attribute**: pt-BR

## Key Design Principles
1. **Trust First**: Multiple trust indicators throughout
2. **Clarity**: Simple, direct language for target audience
3. **Urgency**: Subtle scarcity/time elements without being pushy
4. **Mobile-Optimized**: Primary audience likely mobile users
5. **Conversion-Focused**: Clear path to CTA at every section