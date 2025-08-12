import React from "react";

const IAMSystemVisualization = () => {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      minHeight: "100vh",
      color: "#333",
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "20px",
    },
    header: {
      textAlign: "center",
      color: "white",
      marginBottom: "40px",
    },
    headerTitle: {
      fontSize: "2.5em",
      marginBottom: "10px",
      textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    },
    headerSubtitle: {
      fontSize: "1.2em",
      opacity: 0.9,
    },
    section: {
      background: "white",
      borderRadius: "15px",
      padding: "30px",
      marginBottom: "30px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: "transform 0.3s ease",
    },
    sectionTitle: {
      fontSize: "1.8em",
      color: "#2c3e50",
      marginBottom: "20px",
      borderBottom: "3px solid #3498db",
      paddingBottom: "10px",
    },
    architecture: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      margin: "30px 0",
    },
    layer: {
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      border: "2px solid #e0e0e0",
      position: "relative",
    },
    layerTitle: {
      color: "#2c3e50",
      marginBottom: "15px",
      fontSize: "1.3em",
    },
    component: {
      background: "white",
      borderRadius: "8px",
      padding: "12px",
      margin: "8px 0",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      borderLeft: "4px solid #3498db",
    },
    componentBackend: {
      borderLeftColor: "#e74c3c",
    },
    componentDatabase: {
      borderLeftColor: "#f39c12",
    },
    uiMockups: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "30px",
      margin: "30px 0",
    },
    mockup: {
      border: "2px solid #e0e0e0",
      borderRadius: "10px",
      overflow: "hidden",
      background: "white",
      boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    },
    mockupHeader: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "15px",
      fontWeight: "bold",
      textAlign: "center",
    },
    mockupContent: {
      padding: "20px",
      minHeight: "300px",
    },
    loginForm: {
      maxWidth: "300px",
      margin: "0 auto",
    },
    formGroup: {
      marginBottom: "20px",
    },
    formLabel: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
      color: "#2c3e50",
    },
    formInput: {
      width: "100%",
      padding: "12px",
      border: "2px solid #e0e0e0",
      borderRadius: "5px",
      fontSize: "14px",
      boxSizing: "border-box",
    },
    btn: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "12px 30px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      width: "100%",
      margin: "10px 0",
    },
    dashboardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "15px",
    },
    dashboardCard: {
      background: "#f8f9fa",
      borderRadius: "8px",
      padding: "15px",
      textAlign: "center",
      borderLeft: "4px solid #3498db",
    },
    dashboardCardTitle: {
      color: "#2c3e50",
      marginBottom: "10px",
    },
    dashboardNumber: {
      fontSize: "2em",
      fontWeight: "bold",
      color: "#3498db",
    },
    userTable: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "15px",
    },
    tableHeader: {
      padding: "12px",
      textAlign: "left",
      borderBottom: "1px solid #e0e0e0",
      background: "#f8f9fa",
      fontWeight: "bold",
      color: "#2c3e50",
    },
    tableCell: {
      padding: "12px",
      textAlign: "left",
      borderBottom: "1px solid #e0e0e0",
    },
    statusActive: {
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold",
      background: "#d4edda",
      color: "#155724",
    },
    statusInactive: {
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold",
      background: "#f8d7da",
      color: "#721c24",
    },
    securityFeatures: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      margin: "30px 0",
    },
    securityCard: {
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      color: "white",
      padding: "25px",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    },
    securityIcon: {
      fontSize: "3em",
      marginBottom: "15px",
    },
    securityCardTitle: {
      marginBottom: "10px",
      fontSize: "1.2em",
    },
    techStack: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "20px",
      margin: "30px 0",
    },
    techItem: {
      background: "white",
      border: "2px solid #e0e0e0",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      minWidth: "150px",
      boxShadow: "0 3px 15px rgba(0,0,0,0.1)",
    },
    techItemFrontend: {
      borderColor: "#61dafb",
    },
    techItemBackend: {
      borderColor: "#68a063",
    },
    techItemDatabase: {
      borderColor: "#4db33d",
    },
    techItemAuth: {
      borderColor: "#f39c12",
    },
    workflow: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      margin: "30px 0",
    },
    workflowStep: {
      background: "white",
      border: "2px solid #3498db",
      borderRadius: "10px",
      padding: "20px",
      textAlign: "center",
      position: "relative",
    },
    benefitsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      margin: "30px 0",
    },
    benefitCard: {
      color: "white",
      padding: "25px",
      borderRadius: "10px",
    },
    benefitCardTitle: {
      marginBottom: "15px",
    },
    timelineGrid: {
      background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      padding: "30px",
      borderRadius: "10px",
      margin: "20px 0",
    },
    timelineContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    timelineItem: {
      textAlign: "center",
    },
    timelineTitle: {
      color: "#2c3e50",
      marginBottom: "10px",
    },
    ctaSection: {
      textAlign: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
    },
    ctaTitle: {
      color: "white",
      borderBottom: "3px solid white",
      display: "inline-block",
      paddingBottom: "10px",
      marginBottom: "20px",
    },
    ctaSubtitle: {
      fontSize: "1.2em",
      marginBottom: "30px",
      opacity: 0.9,
    },
    ctaGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px",
      margin: "30px 0",
    },
    ctaMetric: {
      fontSize: "1.5em",
      margin: "10px 0",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>🔐 Enterprise IAM System</h1>
        <p style={styles.headerSubtitle}>
          Complete Identity & Access Management Solution
        </p>
      </div>

      {/* System Architecture */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🏗️ System Architecture Overview</h2>
        <div style={styles.architecture}>
          <div style={styles.layer}>
            <h3 style={styles.layerTitle}>Frontend Layer</h3>
            <div style={styles.component}>React Dashboard</div>
            <div style={styles.component}>Admin Console</div>
            <div style={styles.component}>User Portal</div>
            <div style={styles.component}>Mobile Interface</div>
          </div>
          <div style={styles.layer}>
            <h3 style={styles.layerTitle}>Backend Services</h3>
            <div style={{ ...styles.component, ...styles.componentBackend }}>
              Node.js API Server
            </div>
            <div style={{ ...styles.component, ...styles.componentBackend }}>
              OAuth 2.0 Server
            </div>
            <div style={{ ...styles.component, ...styles.componentBackend }}>
              Authentication Service
            </div>
            <div style={{ ...styles.component, ...styles.componentBackend }}>
              Authorization Engine
            </div>
          </div>
          <div style={styles.layer}>
            <h3 style={styles.layerTitle}>Data & Security</h3>
            <div style={{ ...styles.component, ...styles.componentDatabase }}>
              MongoDB Database
            </div>
            <div style={{ ...styles.component, ...styles.componentDatabase }}>
              Audit Logs
            </div>
            <div style={{ ...styles.component, ...styles.componentDatabase }}>
              Session Store
            </div>
            <div style={{ ...styles.component, ...styles.componentDatabase }}>
              Key Management
            </div>
          </div>
        </div>
      </div>

      {/* User Interface Mockups */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🖥️ User Interface Mockups</h2>
        <div style={styles.uiMockups}>
          {/* Login Interface */}
          <div style={styles.mockup}>
            <div style={styles.mockupHeader}>🔑 Secure Login Portal</div>
            <div style={styles.mockupContent}>
              <div style={styles.loginForm}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Email Address</label>
                  <input
                    style={styles.formInput}
                    type='email'
                    placeholder='user@company.com'
                    readOnly
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Password</label>
                  <input
                    style={styles.formInput}
                    type='password'
                    placeholder='••••••••'
                    readOnly
                  />
                </div>
                <button style={styles.btn}>Sign In Securely</button>
                <button style={{ ...styles.btn, background: "#95a5a6" }}>
                  Setup MFA
                </button>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "15px",
                    color: "#7f8c8d",
                  }}
                >
                  🔒 Protected by enterprise-grade encryption
                </p>
              </div>
            </div>
          </div>

          {/* Admin Dashboard */}
          <div style={styles.mockup}>
            <div style={styles.mockupHeader}>📊 Administrator Dashboard</div>
            <div style={styles.mockupContent}>
              <div style={styles.dashboardGrid}>
                <div style={styles.dashboardCard}>
                  <h4 style={styles.dashboardCardTitle}>👥 Total Users</h4>
                  <div style={styles.dashboardNumber}>1,247</div>
                </div>
                <div style={styles.dashboardCard}>
                  <h4 style={styles.dashboardCardTitle}>🔐 Active Sessions</h4>
                  <div style={styles.dashboardNumber}>342</div>
                </div>
                <div style={styles.dashboardCard}>
                  <h4 style={styles.dashboardCardTitle}>🛡️ Security Events</h4>
                  <div style={styles.dashboardNumber}>15</div>
                </div>
                <div style={styles.dashboardCard}>
                  <h4 style={styles.dashboardCardTitle}>📱 Apps Connected</h4>
                  <div style={styles.dashboardNumber}>23</div>
                </div>
              </div>
              <button style={{ ...styles.btn, marginTop: "20px" }}>
                View Detailed Analytics
              </button>
            </div>
          </div>

          {/* User Management */}
          <div style={styles.mockup}>
            <div style={styles.mockupHeader}>👤 User Management Console</div>
            <div style={styles.mockupContent}>
              <table style={styles.userTable}>
                <thead>
                  <tr>
                    <th style={styles.tableHeader}>User</th>
                    <th style={styles.tableHeader}>Role</th>
                    <th style={styles.tableHeader}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={styles.tableCell}>John Smith</td>
                    <td style={styles.tableCell}>Admin</td>
                    <td style={styles.tableCell}>
                      <span style={styles.statusActive}>Active</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.tableCell}>Sarah Jones</td>
                    <td style={styles.tableCell}>Manager</td>
                    <td style={styles.tableCell}>
                      <span style={styles.statusActive}>Active</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={styles.tableCell}>Mike Wilson</td>
                    <td style={styles.tableCell}>User</td>
                    <td style={styles.tableCell}>
                      <span style={styles.statusInactive}>Inactive</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button style={{ ...styles.btn, marginTop: "15px" }}>
                Add New User
              </button>
            </div>
          </div>

          {/* Security Monitor */}
          <div style={styles.mockup}>
            <div style={styles.mockupHeader}>🛡️ Security Monitoring</div>
            <div style={styles.mockupContent}>
              <div
                style={{
                  background: "#f8f9fa",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              >
                <h4 style={{ color: "#27ae60", marginBottom: "10px" }}>
                  ✅ System Status: Secure
                </h4>
                <p style={{ color: "#2c3e50" }}>
                  All security checks passed. No threats detected.
                </p>
              </div>
              <div
                style={{
                  background: "#fff3cd",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "15px",
                }}
              >
                <h4 style={{ color: "#856404", marginBottom: "10px" }}>
                  ⚠️ 3 Failed Login Attempts
                </h4>
                <p style={{ color: "#2c3e50" }}>
                  IP: 192.168.1.100 - Last attempt: 2 minutes ago
                </p>
              </div>
              <button style={styles.btn}>View Security Logs</button>
            </div>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🛡️ Enterprise Security Features</h2>
        <div style={styles.securityFeatures}>
          <div style={styles.securityCard}>
            <div style={styles.securityIcon}>🔐</div>
            <h4 style={styles.securityCardTitle}>
              Multi-Factor Authentication
            </h4>
            <p>Hardware tokens, SMS, and authenticator app support</p>
          </div>
          <div style={styles.securityCard}>
            <div style={styles.securityIcon}>🔄</div>
            <h4 style={styles.securityCardTitle}>Single Sign-On (SSO)</h4>
            <p>Seamless access across all enterprise applications</p>
          </div>
          <div style={styles.securityCard}>
            <div style={styles.securityIcon}>👥</div>
            <h4 style={styles.securityCardTitle}>Role-Based Access Control</h4>
            <p>Granular permissions and role management</p>
          </div>
          <div style={styles.securityCard}>
            <div style={styles.securityIcon}>📊</div>
            <h4 style={styles.securityCardTitle}>Comprehensive Auditing</h4>
            <p>Complete audit trails for compliance reporting</p>
          </div>
          <div style={styles.securityCard}>
            <div style={styles.securityIcon}>🔒</div>
            <h4 style={styles.securityCardTitle}>Advanced Encryption</h4>
            <p>AES-256 encryption at rest and TLS 1.3 in transit</p>
          </div>
          <div style={styles.securityCard}>
            <div style={styles.securityIcon}>⚡</div>
            <h4 style={styles.securityCardTitle}>Real-time Monitoring</h4>
            <p>Instant threat detection and automated responses</p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>⚙️ Technology Stack</h2>
        <div style={styles.techStack}>
          <div style={{ ...styles.techItem, ...styles.techItemFrontend }}>
            <h4>⚛️ Frontend</h4>
            <p>
              <strong>React.js</strong>
            </p>
            <p>Modern, responsive user interface with real-time updates</p>
          </div>
          <div style={{ ...styles.techItem, ...styles.techItemBackend }}>
            <h4>🟢 Backend</h4>
            <p>
              <strong>Node.js</strong>
            </p>
            <p>High-performance, scalable server architecture</p>
          </div>
          <div style={{ ...styles.techItem, ...styles.techItemDatabase }}>
            <h4>🍃 Database</h4>
            <p>
              <strong>MongoDB</strong>
            </p>
            <p>Flexible, encrypted data storage with high availability</p>
          </div>
          <div style={{ ...styles.techItem, ...styles.techItemAuth }}>
            <h4>🔑 Authentication</h4>
            <p>
              <strong>OAuth 2.0</strong>
            </p>
            <p>Industry-standard secure authentication protocol</p>
          </div>
        </div>
      </div>

      {/* User Authentication Workflow */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🔄 Authentication Workflow</h2>
        <div style={styles.workflow}>
          <div style={styles.workflowStep}>
            <h4>1. User Login</h4>
            <p>Secure credential submission with encryption</p>
          </div>
          <div style={styles.workflowStep}>
            <h4>2. Multi-Factor Auth</h4>
            <p>Additional verification layer for enhanced security</p>
          </div>
          <div style={styles.workflowStep}>
            <h4>3. Authorization Check</h4>
            <p>Role and permission validation against policies</p>
          </div>
          <div style={styles.workflowStep}>
            <h4>4. Access Granted</h4>
            <p>Secure session established with audit logging</p>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>🎯 Key Business Benefits</h2>
        <div style={styles.benefitsGrid}>
          <div
            style={{
              ...styles.benefitCard,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <h4 style={styles.benefitCardTitle}>💰 Cost Reduction</h4>
            <p>Reduce security incidents and operational overhead by 60%</p>
          </div>
          <div
            style={{
              ...styles.benefitCard,
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            }}
          >
            <h4 style={styles.benefitCardTitle}>🚀 Improved Productivity</h4>
            <p>Single sign-on reduces login time by 80% across applications</p>
          </div>
          <div
            style={{
              ...styles.benefitCard,
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            }}
          >
            <h4 style={styles.benefitCardTitle}>🛡️ Enhanced Security</h4>
            <p>Enterprise-grade encryption and compliance reporting</p>
          </div>
          <div
            style={{
              ...styles.benefitCard,
              background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            }}
          >
            <h4 style={styles.benefitCardTitle}>📈 Scalability</h4>
            <p>
              Supports unlimited users and integrations with existing systems
            </p>
          </div>
        </div>
      </div>

      {/* Implementation Timeline */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>📅 Implementation Timeline</h2>
        <div style={styles.timelineGrid}>
          <div style={styles.timelineContainer}>
            <div style={styles.timelineItem}>
              <h4 style={styles.timelineTitle}>📋 Months 1-3</h4>
              <p>
                <strong>Planning & Core Development</strong>
              </p>
              <p>Architecture design and backend foundation</p>
            </div>
            <div style={styles.timelineItem}>
              <h4 style={styles.timelineTitle}>🔧 Months 4-9</h4>
              <p>
                <strong>Feature Development</strong>
              </p>
              <p>OAuth implementation and frontend interface</p>
            </div>
            <div style={styles.timelineItem}>
              <h4 style={styles.timelineTitle}>🧪 Months 10-12</h4>
              <p>
                <strong>Testing & Integration</strong>
              </p>
              <p>Security testing and system integration</p>
            </div>
            <div style={styles.timelineItem}>
              <h4 style={styles.timelineTitle}>🚀 Months 13-14</h4>
              <p>
                <strong>Deployment & Go-Live</strong>
              </p>
              <p>Production deployment and user training</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ ...styles.section, ...styles.ctaSection }}>
        <h2 style={styles.ctaTitle}>🎯 Ready to Transform Your Security?</h2>
        <p style={styles.ctaSubtitle}>
          This enterprise IAM solution will provide your organization with
          world-class security, seamless user experience, and comprehensive
          compliance capabilities.
        </p>
        <div style={styles.ctaGrid}>
          <div>
            <h4>💼 Total Investment</h4>
            <p style={styles.ctaMetric}> ---------- </p>
          </div>
          <div>
            <h4>⏱️ Timeline</h4>
            <p style={styles.ctaMetric}>12-14 Months</p>
          </div>
          <div>
            <h4>👥 Team Size</h4>
            <p style={styles.ctaMetric}>2 Experts</p>
          </div>
          <div>
            <h4>📈 ROI Period</h4>
            <p style={styles.ctaMetric}>1-2 Years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAMSystemVisualization;
