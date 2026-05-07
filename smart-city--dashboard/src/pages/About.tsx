import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, Zap, Wind, Database, Server, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Hero */}
        <div className="mb-10 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About the Platform
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            A real-time smart city monitoring platform designed to ingest, process, and visualise
            urban data streams — enabling data-driven decision-making across critical city domains.
          </p>
        </div>

        {/* Background */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Background</h2>
          <p>
            Rapid urbanisation has intensified the complexity of managing modern cities, increasing the
            demand for real-time monitoring and data-driven decision-making. Conventional batch-based
            city data processing systems suffer from latency, scalability limitations, and fragmented
            architecture — making them less effective for time-sensitive smart city applications.
          </p>
          <p>
            This platform addresses those challenges by combining distributed data streaming technologies
            with a web-based dashboard to provide continuous, low-latency monitoring across multiple
            urban domains simultaneously.
          </p>
        </section>

        {/* Architecture */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8">System Architecture</h2>
          <p className="text-muted-foreground mb-8">
            The platform integrates streaming, storage, backend services, and visualisation into a
            single decoupled architecture. Each layer operates independently, enabling modular scaling,
            fault isolation, and independent testing.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <Server className="w-8 h-8 mb-3 text-accent:" />
              <h3 className="text-lg font-semibold mb-2">Streaming Layer</h3>
              <p className="text-sm text-muted-foreground">
                Apache Kafka handles event streaming with fault tolerance and horizontal scalability,
                decoupling data producers from consumers.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <Database className="w-8 h-8 mb-3 text-accent:" />
              <h3 className="text-lg font-semibold mb-2">Persistence Layer</h3>
              <p className="text-sm text-muted-foreground">
                PostgreSQL stores streamed data in domain-specific tables (traffic, energy, air pollution)
                with indexed timestamps for efficient retrieval.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <BarChart3 className="w-8 h-8 mb-3 text-accent:" />
              <h3 className="text-lg font-semibold mb-2">Frontend Dashboard</h3>
              <p className="text-sm text-muted-foreground">
                React-based dashboard loads data via asynchronous API requests and auto-refreshes
                every 10 seconds to simulate real-time operation.
              </p>
            </div>
          </div>
        </section>

        {/* Monitoring Domains */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Monitoring Domains</h2>
          <p className="text-muted-foreground mb-8">
            The dashboard covers five representative smart city domains, giving users the opportunity
            to track various urban metrics at once. Tabular views access recent records while
            chart-based visualisations make trends and patterns apparent.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <Car className="w-8 h-8 mb-3" style={{ color: "hsl(var(--tag-travel))" }} />
              <h3 className="text-xl font-semibold mb-3">Traffic Flow</h3>
              <p className="text-muted-foreground text-sm">
                Vehicle counts, average speeds, and congestion levels across city intersections
                to support traffic management and signal optimisation.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <Zap className="w-8 h-8 mb-3" style={{ color: "hsl(var(--tag-growth))" }} />
              <h3 className="text-xl font-semibold mb-3">Energy Grid</h3>
              <p className="text-muted-foreground text-sm">
                Grid consumption and load percentages per zone — enabling
                energy distribution optimisation and sustainability monitoring.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <Wind className="w-8 h-8 mb-3" style={{ color: "hsl(var(--tag-creativity))" }} />
              <h3 className="text-xl font-semibold mb-3">Air Quality</h3>
              <p className="text-muted-foreground text-sm">
                PM2.5, PM10, and AQI readings from monitoring stations to detect pollution
                events and support public health decisions.
              </p>
            </div><div className="p-6 rounded-xl bg-muted">
              <Zap className="w-8 h-8 mb-3" style={{ color: "hsl(var(--tag-growth))" }} />
              <h3 className="text-xl font-semibold mb-3">Solar energy</h3>
              <p className="text-muted-foreground text-sm">
               Real-time solar generation data, output levels, and performance trends — supporting 
               renewable energy monitoring and efficiency analysis across regions.
              </p>
            </div><div className="p-6 rounded-xl bg-muted">
              <Zap className="w-8 h-8 mb-3" style={{ color: "hsl(var(--tag-growth))" }} />
              <h3 className="text-xl font-semibold mb-3">Noise levels</h3>
              <p className="text-muted-foreground text-sm">
                Continuous monitoring of environmental noise across locations — helping identify
                high-noise zones, assess urban impact, and support smarter city planning.
              </p>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Design Principles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Low Latency</h3>
              <p className="text-muted-foreground">
                Data flows from producers through Kafka to the database and dashboard with minimal
                delay, enabling near real-time situational awareness.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Decoupled Architecture</h3>
              <p className="text-muted-foreground">
                Streaming, storage, backend, and frontend layers operate independently — failures in
                one component are isolated and don't cascade.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Visual Clarity</h3>
              <p className="text-muted-foreground">
                Consistent design tokens and clear data separation reduce cognitive load, helping
                users process complex multi-domain information efficiently.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Scalability</h3>
              <p className="text-muted-foreground">
                The architecture supports horizontal scaling through Kafka partitioning and consumer
                groups, ready for increased data volumes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-4">Explore the Dashboard</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            See real-time data across traffic, energy, and air quality domains —
            updated every 10 seconds with live charts and detailed tables.
          </p>
          <Button
            onClick={() => navigate("/dashboard")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
          >
            Open Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>
    </div>
  );
};

export default About;
