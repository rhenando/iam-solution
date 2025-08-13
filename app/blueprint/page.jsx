"use client";

import React, { useState } from "react";

const IAMProductBlueprint = () => {
  const [activeFlow, setActiveFlow] = useState("architecture");

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f8f9fa",
    },
    header: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "30px",
      borderRadius: "15px",
      marginBottom: "30px",
      textAlign: "center",
    },
    headerTitle: {
      fontSize: "2.5em",
      marginBottom: "10px",
      fontWeight: "bold",
    },
    headerSubtitle: {
      fontSize: "1.2em",
      opacity: 0.9,
    },
    tabContainer: {
      background: "white",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      overflow: "hidden",
      marginBottom: "20px",
    },
    tabHeader: {
      display: "flex",
      borderBottom: "2px solid #e9ecef",
      flexWrap: "wrap",
      color: "black",
    },
    tab: {
      flex: 1,
      minWidth: "180px",
      padding: "15px 10px",
      background: "#f8f9fa",
      border: "none",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "bold",
      transition: "all 0.3s ease",
      textAlign: "center",
    },
    activeTab: {
      background: "#667eea",
      color: "white",
      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    },
    tabContent: {
      padding: "30px",
    },
    flowDiagram: {
      background: "#ffffff",
      border: "2px solid #e9ecef",
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "20px",
    },
    flowTitle: {
      fontSize: "1.5em",
      color: "#2c3e50",
      marginBottom: "20px",
      textAlign: "center",
      borderBottom: "2px solid #667eea",
      paddingBottom: "10px",
    },
    flowStep: {
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      border: "2px solid #667eea",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px",
      display: "inline-block",
      minWidth: "150px",
      textAlign: "center",
      fontSize: "14px",
      color: "#2c3e50",
      fontWeight: "500",
    },
    flowStepActive: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
    },
    flowStepCritical: {
      background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
      color: "white",
      textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
    },
    flowStepSuccess: {
      background: "linear-gradient(135deg, #27ae60 0%, #229954 100%)",
      color: "white",
      textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
    },
    flowContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    flowRow: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "10px",
    },
    arrow: {
      fontSize: "2em",
      color: "#667eea",
      margin: "0 10px",
    },
    arrowDown: {
      fontSize: "2em",
      color: "#667eea",
      transform: "rotate(90deg)",
    },
    componentBox: {
      background: "white",
      border: "2px solid #dee2e6",
      borderRadius: "10px",
      padding: "20px",
      margin: "10px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      minHeight: "150px",
    },
    componentTitle: {
      fontSize: "1.2em",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "15px",
      textAlign: "center",
      borderBottom: "2px solid #667eea",
      paddingBottom: "8px",
    },
    componentList: {
      fontSize: "13px",
      color: "#495057",
      lineHeight: "1.8",
      fontWeight: "500",
    },
    legend: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      marginTop: "20px",
      padding: "15px",
      background: "#f8f9fa",
      borderRadius: "8px",
    },
    legendItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#2c3e50",
    },
    legendBox: {
      width: "20px",
      height: "20px",
      borderRadius: "4px",
    },
    dataFlowDiagram: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginBottom: "30px",
    },
    apiEndpoint: {
      background: "#f8f9fa",
      border: "1px solid #dee2e6",
      borderRadius: "8px",
      padding: "10px 15px",
      marginBottom: "8px",
      fontFamily: "monospace",
      fontSize: "12px",
      color: "#495057",
      fontWeight: "bold",
      transition: "all 0.2s ease",
    },
    securityLayer: {
      background: "linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%)",
      border: "2px solid #fd7e14",
      borderRadius: "10px",
      padding: "15px",
      margin: "10px 0",
      textAlign: "center",
      fontSize: "14px",
      color: "#495057",
      fontWeight: "bold",
    },
  };

  const renderArchitectureFlow = () => (
    <div style={styles.tabContent}>
      <div style={styles.flowDiagram}>
        <h3 style={styles.flowTitle}>🏗️ System Architecture Blueprint</h3>

        <div style={styles.flowContainer}>
          <div style={styles.flowRow}>
            <div style={{ ...styles.flowStep, ...styles.flowStepSuccess }}>
              <strong>👥 End Users</strong>
              <br />
              <span style={{ fontSize: "12px" }}>
                Web Browser
                <br />
                Mobile App
                <br />
                API Clients
              </span>
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={{ ...styles.flowStep, ...styles.flowStepCritical }}>
              <strong>🌐 CDN Layer</strong>
              <br />
              <span style={{ fontSize: "12px" }}>
                CloudFront
                <br />
                Global Edge
                <br />
                SSL Termination
              </span>
            </div>
            <div style={styles.arrow}>→</div>
            <div style={{ ...styles.flowStep, ...styles.flowStepCritical }}>
              <strong>🛡️ Security Layer</strong>
              <br />
              <span style={{ fontSize: "12px" }}>
                WAF
                <br />
                DDoS Protection
                <br />
                Rate Limiting
              </span>
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={{ ...styles.flowStep, ...styles.flowStepActive }}>
              <strong>⚖️ Load Balancer</strong>
              <br />
              Application LB
              <br />
              Health Checks
              <br />
              Auto Scaling
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.flowStep}>
              <strong>⚛️ Frontend</strong>
              <br />
              React App
              <br />
              Admin Console
              <br />
              User Portal
            </div>
            <div style={styles.arrow}>↔</div>
            <div style={styles.flowStep}>
              <strong>🟢 Backend API</strong>
              <br />
              Node.js
              <br />
              Express.js
              <br />
              RESTful APIs
            </div>
            <div style={styles.arrow}>↔</div>
            <div style={styles.flowStep}>
              <strong>🔐 OAuth Server</strong>
              <br />
              Authorization
              <br />
              Token Management
              <br />
              SSO Integration
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.flowStep}>
              <strong>🍃 Primary DB</strong>
              <br />
              MongoDB
              <br />
              DocumentDB
              <br />
              Read/Write
            </div>
            <div style={styles.arrow}>↔</div>
            <div style={styles.flowStep}>
              <strong>📊 Analytics DB</strong>
              <br />
              Read Replicas
              <br />
              Reporting
              <br />
              Analytics
            </div>
            <div style={styles.arrow}>↔</div>
            <div style={styles.flowStep}>
              <strong>📁 File Storage</strong>
              <br />
              S3 Buckets
              <br />
              User Assets
              <br />
              Backups
            </div>
          </div>
        </div>

        <div style={styles.legend}>
          <div style={styles.legendItem}>
            <div
              style={{
                ...styles.legendBox,
                background: "linear-gradient(135deg, #27ae60 0%, #229954 100%)",
              }}
            ></div>
            <span>User Interface</span>
          </div>
          <div style={styles.legendItem}>
            <div
              style={{
                ...styles.legendBox,
                background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
              }}
            ></div>
            <span>Security Layer</span>
          </div>
          <div style={styles.legendItem}>
            <div
              style={{
                ...styles.legendBox,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            ></div>
            <span>Core Services</span>
          </div>
          <div style={styles.legendItem}>
            <div
              style={{
                ...styles.legendBox,
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                border: "2px solid #667eea",
              }}
            ></div>
            <span>Data Layer</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUserFlow = () => (
    <div style={styles.tabContent}>
      <div style={styles.flowDiagram}>
        <h3 style={styles.flowTitle}>👤 User Authentication Flow</h3>

        <div style={styles.flowContainer}>
          <div style={styles.flowRow}>
            <div style={{ ...styles.flowStep, ...styles.flowStepSuccess }}>
              <strong>1. User Access</strong>
              <br />
              User clicks login
              <br />
              Redirected to IAM
              <br />
              HTTPS secure
            </div>
            <div style={styles.arrow}>→</div>
            <div style={styles.flowStep}>
              <strong>2. Credentials</strong>
              <br />
              Username/Email
              <br />
              Password entry
              <br />
              Client validation
            </div>
            <div style={styles.arrow}>→</div>
            <div style={{ ...styles.flowStep, ...styles.flowStepCritical }}>
              <strong>3. Server Auth</strong>
              <br />
              Credential verification
              <br />
              Database lookup
              <br />
              Password hash check
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={{ ...styles.flowStep, ...styles.flowStepActive }}>
              <strong>4. MFA Check</strong>
              <br />
              If enabled
              <br />
              SMS/Email/App
              <br />
              Token verification
            </div>
            <div style={styles.arrow}>→</div>
            <div style={styles.flowStep}>
              <strong>5. Role Lookup</strong>
              <br />
              User permissions
              <br />
              Role assignments
              <br />
              Policy evaluation
            </div>
            <div style={styles.arrow}>→</div>
            <div style={{ ...styles.flowStep, ...styles.flowStepSuccess }}>
              <strong>6. Token Generation</strong>
              <br />
              JWT creation
              <br />
              Refresh token
              <br />
              Session setup
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={{ ...styles.flowStep, ...styles.flowStepSuccess }}>
              <strong>7. Access Granted</strong>
              <br />
              Dashboard redirect
              <br />
              User interface
              <br />
              Authorized features
            </div>
          </div>
        </div>
      </div>

      <div style={styles.flowDiagram}>
        <h3 style={styles.flowTitle}>🔄 OAuth 2.0 Authorization Flow</h3>

        <div style={styles.flowContainer}>
          <div style={styles.flowRow}>
            <div style={{ ...styles.flowStep, ...styles.flowStepSuccess }}>
              <strong>Client App</strong>
              <br />
              Needs access
              <br />
              to protected
              <br />
              resources
            </div>
            <div style={styles.arrow}>→</div>
            <div style={{ ...styles.flowStep, ...styles.flowStepActive }}>
              <strong>Authorization Server</strong>
              <br />
              IAM OAuth
              <br />
              endpoint handles
              <br />
              authorization
            </div>
            <div style={styles.arrow}>→</div>
            <div style={styles.flowStep}>
              <strong>Resource Server</strong>
              <br />
              Protected APIs
              <br />
              and application
              <br />
              resources
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.flowStep}>
              <strong>1. Authorization Request</strong>
              <br />
              Client → Auth Server
              <br />
              client_id, redirect_uri
              <br />
              response_type=code
            </div>
            <div style={styles.arrow}>→</div>
            <div style={styles.flowStep}>
              <strong>2. User Consent</strong>
              <br />
              User authenticates
              <br />
              Grants permissions
              <br />
              Authorizes access
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.flowStep}>
              <strong>3. Authorization Code</strong>
              <br />
              Auth Server → Client
              <br />
              Temporary code
              <br />
              Via redirect_uri
            </div>
            <div style={styles.arrow}>→</div>
            <div style={styles.flowStep}>
              <strong>4. Access Token Request</strong>
              <br />
              Client → Auth Server
              <br />
              Code + client_secret
              <br />
              Backend exchange
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={{ ...styles.flowStep, ...styles.flowStepSuccess }}>
              <strong>5. Access Token</strong>
              <br />
              Auth Server → Client
              <br />
              JWT access token
              <br />+ refresh token
            </div>
            <div style={styles.arrow}>→</div>
            <div style={{ ...styles.flowStep, ...styles.flowStepSuccess }}>
              <strong>6. API Access</strong>
              <br />
              Client → Resource Server
              <br />
              Bearer token
              <br />
              Authorized requests
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataFlow = () => (
    <div style={styles.tabContent}>
      <div style={styles.flowDiagram}>
        <h3 style={styles.flowTitle}>📊 Data Flow & Processing Blueprint</h3>

        <div style={styles.dataFlowDiagram}>
          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>📥 Data Input Layer</div>
            <div style={styles.componentList}>
              • User registration forms
              <br />
              • CSV/Excel bulk imports
              <br />
              • API integrations
              <br />
              • SSO federation data
              <br />• LDAP/AD synchronization
            </div>
          </div>

          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>🔍 Data Validation</div>
            <div style={styles.componentList}>
              • Schema validation
              <br />
              • Email format verification
              <br />
              • Password policy enforcement
              <br />
              • Duplicate detection
              <br />• Data sanitization
            </div>
          </div>

          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>🔒 Security Processing</div>
            <div style={styles.componentList}>
              • Password hashing (bcrypt)
              <br />
              • PII data encryption
              <br />
              • Audit trail generation
              <br />
              • Access log creation
              <br />• Security event detection
            </div>
          </div>

          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>💾 Data Storage</div>
            <div style={styles.componentList}>
              • MongoDB primary storage
              <br />
              • Encrypted at rest
              <br />
              • Read replica distribution
              <br />
              • Backup automation
              <br />• Archive management
            </div>
          </div>

          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>🔄 Data Synchronization</div>
            <div style={styles.componentList}>
              • Real-time updates
              <br />
              • Cross-system sync
              <br />
              • Conflict resolution
              <br />
              • Event broadcasting
              <br />• Cache invalidation
            </div>
          </div>

          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>📤 Data Output</div>
            <div style={styles.componentList}>
              • API responses (JSON)
              <br />
              • Report generation
              <br />
              • Export formats (CSV/Excel)
              <br />
              • Email notifications
              <br />• Webhook deliveries
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAPIFlow = () => (
    <div style={styles.tabContent}>
      <div style={styles.flowDiagram}>
        <h3 style={styles.flowTitle}>🔌 API Architecture & Endpoints</h3>

        <div style={styles.dataFlowDiagram}>
          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>🔐 Authentication APIs</div>
            <div style={styles.apiEndpoint}>POST /api/auth/login</div>
            <div style={styles.apiEndpoint}>POST /api/auth/register</div>
            <div style={styles.apiEndpoint}>POST /api/auth/logout</div>
            <div style={styles.apiEndpoint}>POST /api/auth/refresh</div>
            <div style={styles.apiEndpoint}>POST /api/auth/forgot-password</div>
            <div style={styles.apiEndpoint}>POST /api/auth/mfa/setup</div>
            <div style={styles.apiEndpoint}>POST /api/auth/mfa/verify</div>
          </div>

          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>👥 User Management APIs</div>
            <div style={styles.apiEndpoint}>GET /api/users</div>
            <div style={styles.apiEndpoint}>POST /api/users</div>
            <div style={styles.apiEndpoint}>GET /api/users/:id</div>
            <div style={styles.apiEndpoint}>PUT /api/users/:id</div>
            <div style={styles.apiEndpoint}>DELETE /api/users/:id</div>
            <div style={styles.apiEndpoint}>POST /api/users/bulk-import</div>
            <div style={styles.apiEndpoint}>POST /api/users/bulk-actions</div>
          </div>

          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>🎭 Role & Permission APIs</div>
            <div style={styles.apiEndpoint}>GET /api/roles</div>
            <div style={styles.apiEndpoint}>POST /api/roles</div>
            <div style={styles.apiEndpoint}>PUT /api/roles/:id</div>
            <div style={styles.apiEndpoint}>GET /api/permissions</div>
            <div style={styles.apiEndpoint}>POST /api/permissions</div>
            <div style={styles.apiEndpoint}>PUT /api/users/:id/roles</div>
            <div style={styles.apiEndpoint}>GET /api/users/:id/permissions</div>
          </div>

          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>🔑 OAuth 2.0 APIs</div>
            <div style={styles.apiEndpoint}>GET /oauth/authorize</div>
            <div style={styles.apiEndpoint}>POST /oauth/token</div>
            <div style={styles.apiEndpoint}>POST /oauth/introspect</div>
            <div style={styles.apiEndpoint}>POST /oauth/revoke</div>
            <div style={styles.apiEndpoint}>GET /oauth/userinfo</div>
            <div style={styles.apiEndpoint}>
              GET /.well-known/openid_configuration
            </div>
          </div>

          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>📊 Analytics & Audit APIs</div>
            <div style={styles.apiEndpoint}>GET /api/audit/logs</div>
            <div style={styles.apiEndpoint}>GET /api/audit/events</div>
            <div style={styles.apiEndpoint}>GET /api/analytics/users</div>
            <div style={styles.apiEndpoint}>GET /api/analytics/logins</div>
            <div style={styles.apiEndpoint}>GET /api/compliance/reports</div>
            <div style={styles.apiEndpoint}>GET /api/monitoring/health</div>
          </div>

          <div style={styles.componentBox}>
            <div style={styles.componentTitle}>🔗 Integration APIs</div>
            <div style={styles.apiEndpoint}>
              POST /api/integrations/ldap/sync
            </div>
            <div style={styles.apiEndpoint}>
              POST /api/integrations/saml/sso
            </div>
            <div style={styles.apiEndpoint}>GET /api/integrations/status</div>
            <div style={styles.apiEndpoint}>POST /api/webhooks/register</div>
            <div style={styles.apiEndpoint}>GET /api/clients</div>
            <div style={styles.apiEndpoint}>POST /api/clients</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurityFlow = () => (
    <div style={styles.tabContent}>
      <div style={styles.flowDiagram}>
        <h3 style={styles.flowTitle}>
          🔒 Security Architecture & Data Protection
        </h3>

        <div style={styles.flowContainer}>
          <div style={styles.securityLayer}>
            <strong>🌐 Network Security Layer</strong>
            <br />
            TLS 1.3 Encryption • DDoS Protection • Firewall Rules • VPC
            Isolation
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.securityLayer}>
            <strong>🛡️ Application Security Layer</strong>
            <br />
            Input Validation • XSS Protection • CSRF Guards • SQL Injection
            Prevention
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.securityLayer}>
            <strong>🔐 Authentication Security Layer</strong>
            <br />
            Multi-Factor Auth • Password Policies • Session Management • Token
            Security
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.securityLayer}>
            <strong>🎭 Authorization Security Layer</strong>
            <br />
            RBAC/ABAC • Policy Engine • Least Privilege • Dynamic Permissions
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.securityLayer}>
            <strong>💾 Data Security Layer</strong>
            <br />
            AES-256 Encryption • Key Management • Data Anonymization • Secure
            Deletion
          </div>
        </div>
      </div>
    </div>
  );

  const renderDeploymentFlow = () => (
    <div style={styles.tabContent}>
      <div style={styles.flowDiagram}>
        <h3 style={styles.flowTitle}>🚀 Deployment Pipeline Flow</h3>

        <div style={styles.flowContainer}>
          <div style={styles.flowRow}>
            <div style={{ ...styles.flowStep, ...styles.flowStepSuccess }}>
              <strong>1. Code Commit</strong>
              <br />
              Git repository
              <br />
              Branch protection
              <br />
              Code review
            </div>
            <div style={styles.arrow}>→</div>
            <div style={styles.flowStep}>
              <strong>2. Automated Tests</strong>
              <br />
              Unit tests
              <br />
              Integration tests
              <br />
              Security scans
            </div>
            <div style={styles.arrow}>→</div>
            <div style={{ ...styles.flowStep, ...styles.flowStepActive }}>
              <strong>3. Build Process</strong>
              <br />
              Docker images
              <br />
              Dependency check
              <br />
              Artifact creation
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.flowStep}>
              <strong>4. Staging Deploy</strong>
              <br />
              Staging environment
              <br />
              Performance tests
              <br />
              UAT validation
            </div>
            <div style={styles.arrow}>→</div>
            <div style={{ ...styles.flowStep, ...styles.flowStepCritical }}>
              <strong>5. Security Gates</strong>
              <br />
              Penetration testing
              <br />
              Vulnerability scan
              <br />
              Compliance check
            </div>
            <div style={styles.arrow}>→</div>
            <div style={styles.flowStep}>
              <strong>6. Approval Process</strong>
              <br />
              Change approval
              <br />
              Stakeholder sign-off
              <br />
              Deployment window
            </div>
          </div>

          <div style={styles.flowRow}>
            <div style={styles.arrowDown}>↓</div>
          </div>

          <div style={styles.flowRow}>
            <div style={{ ...styles.flowStep, ...styles.flowStepActive }}>
              <strong>7. Production Deploy</strong>
              <br />
              Blue-green deployment
              <br />
              Rolling updates
              <br />
              Health monitoring
            </div>
            <div style={styles.arrow}>→</div>
            <div style={styles.flowStep}>
              <strong>8. Post-Deploy</strong>
              <br />
              Smoke tests
              <br />
              Performance monitoring
              <br />
              Error tracking
            </div>
            <div style={styles.arrow}>→</div>
            <div style={{ ...styles.flowStep, ...styles.flowStepSuccess }}>
              <strong>9. Success/Rollback</strong>
              <br />
              Health validation
              <br />
              Rollback if needed
              <br />
              Notification alerts
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>🎯 Enterprise IAM System</h1>
        <p style={styles.headerSubtitle}>
          Product Blueprint & Technical Flow Diagrams
        </p>
      </div>

      <div style={styles.tabContainer}>
        <div style={styles.tabHeader}>
          <button
            style={{
              ...styles.tab,
              ...(activeFlow === "architecture" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveFlow("architecture")}
          >
            🏗️ System Architecture
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeFlow === "user-flow" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveFlow("user-flow")}
          >
            👤 User Flows
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeFlow === "data-flow" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveFlow("data-flow")}
          >
            📊 Data Flow
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeFlow === "api-flow" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveFlow("api-flow")}
          >
            🔌 API Architecture
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeFlow === "security-flow" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveFlow("security-flow")}
          >
            🔒 Security Flow
          </button>
          <button
            style={{
              ...styles.tab,
              ...(activeFlow === "deployment-flow" ? styles.activeTab : {}),
            }}
            onClick={() => setActiveFlow("deployment-flow")}
          >
            🚀 Deployment Flow
          </button>
        </div>

        {activeFlow === "architecture" && renderArchitectureFlow()}
        {activeFlow === "user-flow" && renderUserFlow()}
        {activeFlow === "data-flow" && renderDataFlow()}
        {activeFlow === "api-flow" && renderAPIFlow()}
        {activeFlow === "security-flow" && renderSecurityFlow()}
        {activeFlow === "deployment-flow" && renderDeploymentFlow()}
      </div>
    </div>
  );
};

export default IAMProductBlueprint;
