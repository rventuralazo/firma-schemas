export interface Certificado {
  CertificadoMH: CertificadoMh
}

export interface CertificadoMh {
  _id: string
  nit: string
  publicKey: PublicKey
  privateKey: PrivateKey
  activo: string
  certificado: Certificado
  clavePub: string
  clavePri: string
}

export interface PublicKey {
  keyType: string
  algorithm: string
  encodied: string
  format: string
  clave: string
}

export interface PrivateKey {
  keyType: string
  algorithm: string
  encodied: string
  format: string
  clave: string
}

export interface Certificado {
  basicEstructure: BasicEstructure
  extensions: Extensions
}

export interface BasicEstructure {
  version: string
  serial: string
  signatureAlgorithm: SignatureAlgorithm
  issuer: Issuer
  validity: Validity
  subject: Subject
  subjectPublicKeyInfo: SubjectPublicKeyInfo
}

export interface SignatureAlgorithm {
  algorithm: string
  parameters: string
}

export interface Issuer {
  countryName: string
  localilyName: string
  organizationalUnit: string
  organizationalName: string
  commonName: string
  organizationIdentifier: string
}

export interface Validity {
  notBefore: string
  notAfter: string
}

export interface Subject {
  countryName: string
  organizationName: string
  organizationUnitName: string
  organizationIdentifier: string
  surname: string
  givenName: string
  commonName: string
  description: string
}

export interface SubjectPublicKeyInfo {
  algorithmIdenitifier: AlgorithmIdenitifier
  subjectPublicKey: string
}

export interface AlgorithmIdenitifier {
  algorithm: string
  parameters: string
}

export interface Extensions {
  authorityKeyIdentifier: AuthorityKeyIdentifier
  subjectKeyIdentifier: SubjectKeyIdentifier
  keyUsage: KeyUsage
  certificatePolicies: CertificatePolicies
  subjectAlternativeNames: SubjectAlternativeNames
  extendedKeyUsage: ExtendedKeyUsage
  crlDistributionPoint: CrlDistributionPoint
  authorityInfoAccess: AuthorityInfoAccess
  qualifiedCertificateStatements: QualifiedCertificateStatements
  basicConstraints: BasicConstraints
}

export interface AuthorityKeyIdentifier {
  keyIdentifier: string
}

export interface SubjectKeyIdentifier {
  keyIdentifier: string
}

export interface KeyUsage {
  digitalSignature: string
  contentCommintment: string
  dataEncipherment: string
  keyAgreement: string
  keyCertificateSignature: string
  crlSignature: string
  encipherOnly: string
  decipherOnly: string
}

export interface CertificatePolicies {
  policyInformations: string
}

export interface SubjectAlternativeNames {
  rfc822Name: string
}

export interface ExtendedKeyUsage {
  clientAuth: string
  emailProtection: string
}

export interface CrlDistributionPoint {
  distributionPoint: DistributionPoint
}

export interface DistributionPoint {
  distributionPoint: string[]
}

export interface AuthorityInfoAccess {
  accessDescription: AccessDescription
}

export interface AccessDescription {
  accessDescription: AccessDescription2
}

export interface AccessDescription2 {
  accessMethod: string
  accessLocation: AccessLocation
}

export interface AccessLocation {
  accessLocation: string
}

export interface QualifiedCertificateStatements {
  qcCompliance: string
  qcEuRetentionPeriod: string
  qcPDS: QcPds
  qcType: string
}

export interface QcPds {
  pdsLocation: string
  url: string
  language: string
}

export interface BasicConstraints {
  ca: string
}
