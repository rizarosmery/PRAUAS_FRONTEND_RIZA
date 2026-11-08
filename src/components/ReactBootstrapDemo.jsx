import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

/**
 * Contoh komponen terstruktur menggunakan React-Bootstrap.
 * Dirender di #react-bootstrap-root (display:none) agar tampilan
 * website Tripzap tidak berubah.
 */
export default function ReactBootstrapDemo() {
  return (
    <Container fluid className="p-3" aria-hidden="true">
      <Row className="g-3">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>React-Bootstrap Aktif</Card.Title>
              <Card.Text>
                Komponen React-Bootstrap dimuat via JSX + Vite tanpa mengubah tampilan halaman.
              </Card.Text>
              <Stack direction="horizontal" gap={2}>
                <Button variant="primary" size="sm" type="button">
                  Contoh Button
                </Button>
                <Badge bg="secondary">JSX</Badge>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Alert variant="info" className="mb-0">
            Integrasi non-visual (mount tersembunyi).
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}
