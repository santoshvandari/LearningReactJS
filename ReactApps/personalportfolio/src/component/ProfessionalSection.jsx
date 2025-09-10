import React from 'react'

export default function ProfessionalSection() {
    return (
        <section id="services">
            <div class="section-header" data-aos="fade-up">
                <h2 class="section-title">
                    <span class="section-number">03.</span>
                    Professional Services by Santosh Bhandari
                </h2>
                <div class="section-line"></div>
                <p style="color: #a8b2d1; text-align: center; margin-top: 1rem;">Backend development and full-stack
                    solutions</p>
            </div>

            <div class="services-wrapper">
                <div class="services-grid">
                    <div class="service-card" data-aos="fade-up" data-aos-delay="100">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="service-icon">
                                    <i class="bi bi-code"></i>
                                </div>
                                <h3 class="service-title">API Development</h3>
                                <p class="service-preview">RESTful & GraphQL APIs</p>
                                <div class="card-overlay">
                                    <span>Learn More</span>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>API Development</h3>
                                <p>Building robust, scalable APIs using modern frameworks like FastAPI, Django REST, and
                                    GraphQL. Focus on performance, security, and documentation.</p>
                                <ul>
                                    <li>RESTful API Design</li>
                                    <li>GraphQL Implementation</li>
                                    <li>API Documentation</li>
                                    <li>Rate Limiting & Security</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="service-card" data-aos="fade-up" data-aos-delay="200">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="service-icon">
                                    <i class="bi bi-database"></i>
                                </div>
                                <h3 class="service-title">Database Design</h3>
                                <p class="service-preview">Optimized Data Architecture</p>
                                <div class="card-overlay">
                                    <span>Learn More</span>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>Database Design</h3>
                                <p>Designing efficient database schemas and optimizing queries for maximum performance.
                                    Experience with both SQL and NoSQL databases.</p>
                                <ul>
                                    <li>Schema Design</li>
                                    <li>Query Optimization</li>
                                    <li>Database Migration</li>
                                    <li>Performance Tuning</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="service-card" data-aos="fade-up" data-aos-delay="300">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="service-icon">
                                    <i class="bi bi-layers"></i>
                                </div>
                                <h3 class="service-title">Full-stack Development</h3>
                                <p class="service-preview">End-to-End Web Solutions</p>
                                <div class="card-overlay">
                                    <span>Learn More</span>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>Full-stack Development</h3>
                                <p>Building complete web applications from frontend to backend, with expertise in modern
                                    technologies and best practices.</p>
                                <ul>
                                    <li>React.js Applications</li>
                                    <li>Responsive UI/UX</li>
                                    <li>API Integration</li>
                                    <li>Full-stack Architecture</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="service-card" data-aos="fade-up" data-aos-delay="400">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="service-icon">
                                    <i class="bi bi-gear"></i>
                                </div>
                                <h3 class="service-title">System Integration</h3>
                                <p class="service-preview">Seamless Connectivity</p>
                                <div class="card-overlay">
                                    <span>Learn More</span>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>System Integration</h3>
                                <p>Connecting different systems and services to work together seamlessly. ETL processes,
                                    data synchronization, and third-party integrations.</p>
                                <ul>
                                    <li>Third-party API Integration</li>
                                    <li>ETL Development</li>
                                    <li>Data Synchronization</li>
                                    <li>Legacy System Migration</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="service-card" data-aos="fade-up" data-aos-delay="500">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="service-icon">
                                    <i class="bi bi-phone"></i>
                                </div>
                                <h3 class="service-title">Mobile Backend</h3>
                                <p class="service-preview">App Backend Services</p>
                                <div class="card-overlay">
                                    <span>Learn More</span>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>Mobile Backend</h3>
                                <p>Building robust backend services for mobile applications with real-time features,
                                    push notifications, and offline synchronization.</p>
                                <ul>
                                    <li>Real-time Communications</li>
                                    <li>Push Notifications</li>
                                    <li>Offline Data Sync</li>
                                    <li>Mobile API Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="service-card" data-aos="fade-up" data-aos-delay="600">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="service-icon">
                                    <i class="bi bi-shield-check"></i>
                                </div>
                                <h3 class="service-title">Security & Performance</h3>
                                <p class="service-preview">Secure & Fast Systems</p>
                                <div class="card-overlay">
                                    <span>Learn More</span>
                                </div>
                            </div>
                            <div class="card-back">
                                <h3>Security & Performance</h3>
                                <p>Implementing security best practices and optimizing system performance for
                                    high-traffic applications.</p>
                                <ul>
                                    <li>Security Audits</li>
                                    <li>Performance Optimization</li>
                                    <li>Load Testing</li>
                                    <li>Security Implementation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
