import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Phone, MapPin, Clock, Star, Zap, Cigarette, Droplets, Candy, Flame, Wrench,
  CircleDot, ShieldCheck, Sparkles, Users, ParkingCircle, Wallet, CalendarDays, Facebook, Instagram
} from "lucide-react";
import heroShop from "@/assets/hero-shop.jpg";
import galleryVapes from "@/assets/gallery-vapes.jpg";
import galleryGlass from "@/assets/gallery-glass.jpg";
import galleryTobacco from "@/assets/gallery-tobacco.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";

const products = [
  { icon: Zap, title: "Disposable Vapes", desc: "Newest flavors and the most popular brands restocked weekly.", ideal: "Vapers who want grab‑and‑go", benefit: "Lowest prices in town", color: "cyan" },
  { icon: Droplets, title: "E‑Juices & Vape Juice", desc: "One of the largest flavor selections in the Altavista area.", ideal: "Refillable device users", benefit: "Massive variety", color: "magenta" },
  { icon: Cigarette, title: "Tobacco Products", desc: "Cigarettes, premium cigars, and rolling tobacco for every preference.", ideal: "Daily smokers & cigar lovers", benefit: "Everyday low prices", color: "cyan" },
  { icon: CircleDot, title: "Glassware", desc: "Bongs, hand pipes, silicone pieces and more — durable and stylish.", ideal: "Collectors & casuals alike", benefit: "Hand‑picked quality", color: "magenta" },
  { icon: Candy, title: "Gummies & Edibles", desc: "A wide variety of gummies and edible treats to choose from.", ideal: "Edible enthusiasts", benefit: "Always fresh stock", color: "cyan" },
  { icon: Wrench, title: "Accessories", desc: "Lighters, wraps, grinders, torches and every essential in between.", ideal: "Everyone who needs the gear", benefit: "One‑stop convenience", color: "magenta" },
];

const reasons = [
  { icon: Sparkles, title: "One of the Largest Selections in the Area" },
  { icon: Wallet, title: "Affordable Pricing Across All Categories" },
  { icon: Users, title: "Friendly, Knowledgeable Staff" },
  { icon: CalendarDays, title: "Open Every Day of the Week" },
  { icon: MapPin, title: "Multiple Convenient Locations" },
  { icon: ShieldCheck, title: "Trusted Local Reputation" },
  { icon: ParkingCircle, title: "Easy Parking, Quick In‑and‑Out" },
];

const testimonials = [
  { quote: "Best prices in Altavista, hands down. I always find what I'm looking for and the staff actually knows their stuff.", name: "Marcus R.", tag: "Regular customer" },
  { quote: "Huge selection of disposables and juice flavors. Clean store, organized shelves, and they're always quick at the counter.", name: "Jasmine T.", tag: "Vape enthusiast" },
  { quote: "I drive past two other shops to come here. The crew is friendly and they actually carry the cigars I want.", name: "Doug H.", tag: "Cigar buyer" },
  { quote: "Open late, easy parking, and they've got everything from glass to gummies. My go‑to spot in town.", name: "Ashley M.", tag: "Local" },
  { quote: "Walked in not knowing what I needed and walked out with exactly the right setup. Solid customer service.", name: "Tyler B.", tag: "First‑time buyer" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="container flex items-center justify-between h-16">
          <a href="#top" className="font-display text-2xl tracking-widest">
            <span className="neon-text-cyan">ALTAVISTA</span>
            <span className="text-foreground/80"> T&V</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider text-muted-foreground">
            <a href="#products" className="hover:text-neon-cyan transition-colors">Products</a>
            <a href="#why" className="hover:text-neon-cyan transition-colors">Why Us</a>
            <a href="#reviews" className="hover:text-neon-cyan transition-colors">Reviews</a>
            <a href="#visit" className="hover:text-neon-cyan transition-colors">Visit</a>
          </div>
          <a href="tel:+14343091425">
            <Button variant="default" className="bg-gradient-neon text-primary-foreground hover:opacity-90 font-semibold">
              <Phone className="w-4 h-4 mr-2" /> (434) 309‑1425
            </Button>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full neon-border text-xs uppercase tracking-[0.2em] text-neon-cyan animate-flicker">
              <span className="w-2 h-2 rounded-full bg-neon-cyan shadow-glow-cyan" />
              Open Daily • Altavista, VA
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              ALTAVISTA'S <br />
              <span className="neon-text-cyan">GO‑TO SPOT</span> <br />
              FOR TOBACCO, <br />
              <span className="neon-text-magenta">VAPES</span> & SMOKE <br />
              ACCESSORIES
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Huge selection, great prices, and everything you need — all in one shop.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products">
                <Button size="lg" className="bg-gradient-neon text-primary-foreground hover:opacity-90 font-semibold uppercase tracking-wider animate-pulse-glow">
                  Shop Categories
                </Button>
              </a>
              <a href="#visit">
                <Button size="lg" variant="outline" className="border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 hover:text-neon-cyan uppercase tracking-wider">
                  <MapPin className="w-4 h-4 mr-2" /> Visit Us
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />)}
                <span className="ml-2">Loved by locals</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Clock className="w-4 h-4 text-neon-cyan" /> Open 7 days
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-neon opacity-30 blur-3xl rounded-full" />
            <div className="relative metallic-border rounded-md overflow-hidden shadow-card-dark">
              <img
                src={heroShop}
                alt="Vape devices, glassware, and tobacco products at Altavista Tobacco & Vape"
                width={1600}
                height={1024}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 md:py-28 border-t border-border">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neon-magenta mb-4">About the shop</p>
            <h2 className="font-display text-4xl md:text-6xl mb-6">
              YOUR <span className="neon-text-cyan">LOCAL</span> SMOKE & VAPE HEADQUARTERS
            </h2>
            <div className="space-y-5 text-lg text-muted-foreground">
              <p>
                Locally owned and proudly serving Altavista for years, we're known across town for our
                massive selection of vape juice, disposable vapes, tobacco products, and gummies.
              </p>
              <p>
                Our friendly, knowledgeable staff is here to help you find exactly what you need —
                whether you're a longtime smoker, a first‑time vaper, or just stopping in for accessories.
              </p>
              <p className="text-foreground">
                <span className="neon-text-magenta font-semibold">No more putting a dent in your wallet.</span>{" "}
                Affordable pricing, every visit. Open 7 days a week for your convenience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "1000+", label: "Products in stock" },
              { num: "7", label: "Days a week open" },
              { num: "2", label: "Local locations" },
              { num: "100%", label: "Locally owned" },
            ].map((s) => (
              <Card key={s.label} className="bg-card border-border p-6 text-center hover:border-neon-cyan/50 transition-smooth hover:shadow-glow-cyan">
                <div className="font-display text-4xl md:text-5xl neon-text-cyan">{s.num}</div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground mt-2">{s.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-20 md:py-28 bg-card/30 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container relative">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan mb-4">What we carry</p>
            <h2 className="font-display text-4xl md:text-6xl mb-4">
              EVERYTHING UNDER <span className="neon-text-magenta">ONE ROOF</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From the latest disposables to premium glass — we stock the brands and flavors you actually want.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => {
              const Icon = p.icon;
              const isCyan = p.color === "cyan";
              return (
                <Card key={p.title} className="group bg-card border-border p-8 hover:border-neon-cyan/50 transition-smooth hover:-translate-y-1 hover:shadow-glow-cyan">
                  <div className={`w-14 h-14 rounded-md flex items-center justify-center mb-6 ${isCyan ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-neon-magenta/10 text-neon-magenta'} group-hover:scale-110 transition-smooth`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-2xl tracking-wider mb-3">{p.title}</h3>
                  <p className="text-muted-foreground mb-5">{p.desc}</p>
                  <div className="space-y-2 pt-5 border-t border-border text-sm">
                    <div className="flex justify-between"><span className="text-muted-foreground">Ideal for</span><span className="text-foreground">{p.ideal}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Benefit</span><span className={isCyan ? "text-neon-cyan" : "text-neon-magenta"}>{p.benefit}</span></div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-neon-magenta mb-4">Why customers choose us</p>
            <h2 className="font-display text-4xl md:text-6xl">
              THE <span className="neon-text-cyan">ALTAVISTA</span> ADVANTAGE
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="flex items-start gap-4 p-6 rounded-md bg-card border border-border hover:border-neon-cyan/40 transition-smooth">
                  <div className="shrink-0 w-12 h-12 rounded bg-gradient-neon flex items-center justify-center text-primary-foreground font-display text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <Icon className="w-5 h-5 text-neon-cyan mb-2" />
                    <h3 className="font-semibold text-lg leading-snug">{r.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28 bg-card/30 border-y border-border">
        <div className="container">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan mb-4">Inside the shop</p>
            <h2 className="font-display text-4xl md:text-6xl">A LOOK <span className="neon-text-magenta">AROUND</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:row-span-2 md:col-span-2 metallic-border rounded-md overflow-hidden">
              <img src={galleryInterior} alt="Interior of Altavista Tobacco & Vape store" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700" />
            </div>
            <div className="metallic-border rounded-md overflow-hidden">
              <img src={galleryVapes} alt="Disposable vape display wall" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700" />
            </div>
            <div className="metallic-border rounded-md overflow-hidden">
              <img src={galleryGlass} alt="Glassware bongs and pipes" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover hover:scale-105 transition-smooth duration-700" />
            </div>
            <div className="md:col-span-3 metallic-border rounded-md overflow-hidden">
              <img src={galleryTobacco} alt="Tobacco and cigar shelves" loading="lazy" width={1024} height={1024} className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-smooth duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-neon-magenta mb-4">What locals say</p>
            <h2 className="font-display text-4xl md:text-6xl">
              REAL CUSTOMERS. <span className="neon-text-cyan">REAL REVIEWS.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className={`bg-card border-border p-8 ${i === 1 ? 'lg:scale-105 lg:shadow-glow-magenta border-neon-magenta/30' : ''}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-neon-yellow text-neon-yellow" />)}
                </div>
                <blockquote className="text-lg leading-relaxed mb-6">"{t.quote}"</blockquote>
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t.tag}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT / LOCATION */}
      <section id="visit" className="py-20 md:py-28 bg-card/30 border-y border-border">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-neon-cyan mb-4">Visit us</p>
            <h2 className="font-display text-4xl md:text-6xl">
              COME <span className="neon-text-magenta">SEE US</span> IN ALTAVISTA
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-card border-border p-8 hover:border-neon-cyan/50 transition-smooth">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-neon-cyan shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl tracking-wider mb-1">PRIMARY LOCATION</h3>
                    <p className="text-muted-foreground">105 Clarion Rd #6F<br />Altavista, VA 24517</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-card border-border p-8 hover:border-neon-magenta/50 transition-smooth">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-neon-magenta shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-2xl tracking-wider mb-1">ALSO FIND US AT</h3>
                    <p className="text-muted-foreground">1032 Main St<br />Altavista, VA 24517</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-card border-border p-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-neon-cyan shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-display text-2xl tracking-wider mb-3">HOURS</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex justify-between"><span>Monday – Thursday</span><span className="text-foreground">8 AM – 10 PM</span></li>
                      <li className="flex justify-between"><span>Friday – Saturday</span><span className="text-foreground">8 AM – 10 PM</span></li>
                      <li className="flex justify-between"><span>Sunday</span><span className="text-foreground">9 AM – 10 PM</span></li>
                    </ul>
                  </div>
                </div>
              </Card>
              <a href="tel:+14343091425" className="block">
                <Button size="lg" className="w-full bg-gradient-neon text-primary-foreground hover:opacity-90 font-semibold uppercase tracking-wider">
                  <Phone className="w-5 h-5 mr-2" /> Call (434) 309‑1425
                </Button>
              </a>
            </div>

            <div className="metallic-border rounded-md overflow-hidden min-h-[500px] lg:min-h-full">
              <iframe
                title="Map of Altavista Tobacco & Vape"
                src="https://www.google.com/maps?q=105+Clarion+Rd+Altavista+VA+24517&output=embed"
                className="w-full h-full min-h-[500px] grayscale-[40%] contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-border bg-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="font-display text-3xl tracking-widest mb-4">
                <span className="neon-text-cyan">ALTAVISTA</span>
                <span className="text-foreground"> TOBACCO & VAPE</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Your local source for tobacco, vapes, and accessories.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded border border-border flex items-center justify-center hover:border-neon-cyan hover:text-neon-cyan transition-smooth">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded border border-border flex items-center justify-center hover:border-neon-magenta hover:text-neon-magenta transition-smooth">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg tracking-wider mb-4 text-neon-cyan">VISIT</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                105 Clarion Rd #6F<br />
                Altavista, VA 24517<br /><br />
                1032 Main St<br />
                Altavista, VA 24517
              </p>
            </div>
            <div>
              <h4 className="font-display text-lg tracking-wider mb-4 text-neon-magenta">CONTACT</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <a href="tel:+14343091425" className="hover:text-neon-cyan transition-colors">(434) 309‑1425</a><br /><br />
                Mon–Sat: 8 AM – 10 PM<br />
                Sun: 9 AM – 10 PM
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs uppercase tracking-wider text-muted-foreground">
            <p>© {new Date().getFullYear()} Altavista Tobacco & Vape. All rights reserved.</p>
            <p>Must be 21+ to purchase tobacco and vape products.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
