import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Star,
  Droplets,
  Sparkles,
  Car,
  ShieldCheck,
  Phone,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-car-wash.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Premium Car Wash & Detailing in Sekondi-Takoradi",
      },
      {
        name: "description",
        content:
          "Compare top-rated car wash and auto detailing centers in Sekondi-Takoradi. Book professional washing, waxing, and interior cleaning.",
      },
    ],
  }),
});

const listings = [
  {
    name: "E-Klin Car Wash & Detailing",
    location: "Near Bank of Ghana road, Takoradi",
    rating: 4.8,
    reviews: 24,
    tags: ["Interior Vacuuming", "Foam Washing", "Undercarriage Cleaning"],
    description:
      "Highly rated for thorough interior vacuuming, deep foam washing, and undercarriage cleaning. A favorite for drivers who want a spotless finish inside and out.",
  },
  {
    name: "Silver Star Auto Car Wash",
    location: "Sekondi-Takoradi Highway",
    rating: 4.6,
    reviews: 18,
    tags: ["Washing & Waxing", "SUV Friendly", "Reliable Service"],
    description:
      "Professional washing and waxing along the main highway. Reliable service for both standard vehicles and SUVs, with attention to paint protection.",
  },
  {
    name: "Car Wash Centre",
    location: "W68G+JJ3, Takoradi",
    rating: 5.0,
    reviews: 1,
    tags: ["Full Service", "Local Favorite", "Detailing"],
    description:
      "A local 5.0-rated car wash centre in Takoradi offering standard and premium wash packages for everyday drivers and detail enthusiasts.",
  },
];

const services = [
  {
    icon: Droplets,
    title: "Exterior Wash",
    description: "Foam washing, hand drying, and tire shine for a gleaming finish.",
  },
  {
    icon: Sparkles,
    title: "Interior Detailing",
    description: "Vacuuming, upholstery care, dashboard polish, and odor treatment.",
  },
  {
    icon: ShieldCheck,
    title: "Wax & Paint Protection",
    description: "Protective wax layers that keep your paint looking newer for longer.",
  },
  {
    icon: Car,
    title: "Undercarriage Cleaning",
    description: "Remove road grime and salt buildup from hard-to-reach underside areas.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium car wash service in Sekondi-Takoradi"
            className="h-full w-full object-cover"
            width={1344}
            height={768}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <Badge
              variant="secondary"
              className="mb-6 bg-accent/20 text-accent-foreground hover:bg-accent/30"
            >
              <Star className="mr-1 h-3 w-3 fill-current" aria-hidden="true" />
              Top-rated car care in the Western Region
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Premium car wash & detailing in Sekondi-Takoradi
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover trusted local centers for professional washing, waxing, and interior
              detailing. From sedans to SUVs, get your vehicle the care it deserves.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Book an appointment
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <a href="#listings">
                <Button size="lg" variant="outline">
                  View listings
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Listings */}
      <section id="listings" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Highly rated local options
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These car wash centers in Sekondi-Takoradi are known for quality service, attention to
              detail, and reliable results.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <Card
                key={listing.name}
                className="flex flex-col transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-xl leading-tight">{listing.name}</CardTitle>
                    <div className="flex shrink-0 items-center gap-1 rounded-full bg-accent/20 px-2 py-1 text-xs font-semibold text-accent-foreground">
                      <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                      {listing.rating}
                    </div>
                  </div>
                  <CardDescription className="flex items-start gap-1.5 pt-1">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {listing.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {listing.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {listing.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto pt-6">
                    <Link to="/contact" className="w-full">
                      <Button variant="outline" className="w-full">
                        Request booking
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border bg-card py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl text-center md:mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Services you can expect
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Standard and premium packages typically include a mix of these professional services.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="bg-background">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="pt-2 text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-primary px-6 py-16 text-primary-foreground sm:px-12 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Transparent pricing for every vehicle
                </h2>
                <p className="mt-4 text-lg opacity-90">
                  Prices generally range from ₵30 to ₵80 depending on your car size and the level of
                  detailing required. SUVs, deep interior cleaning, and wax packages usually sit at
                  the higher end.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-0 bg-primary-foreground/10 text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-2xl">₵30 – ₵45</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Standard wash
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm opacity-90">
                    Exterior foam wash, hand dry, and tire shine for compact and mid-size cars.
                  </CardContent>
                </Card>
                <Card className="border-0 bg-primary-foreground/10 text-primary-foreground">
                  <CardHeader>
                    <CardTitle className="text-2xl">₵50 – ₵80</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Premium detailing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm opacity-90">
                    Full interior vacuum, upholstery care, wax, and undercarriage cleaning for SUVs
                    and larger vehicles.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card px-6 py-16 text-center sm:px-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to give your car a showroom shine?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              For specific pricing, monthly subscriptions, or to book an appointment, reach out to
              local auto hubs via Yellow Pages Ghana or use our contact form.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Contact & book
                </Button>
              </Link>
              <a
                href="https://www.yellowpages.com.gh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  Visit Yellow Pages Ghana
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
