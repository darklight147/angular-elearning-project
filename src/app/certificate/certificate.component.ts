import { Component, Input } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
})
export class CertificateComponent {
  @Input() module!: string;

  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    completionDate: new Date(),
  };
  generateCertificate(userName: string) {
    const doc = new jsPDF();
    doc.addImage('assets/cert.jpg', 'JPEG', 0, 0, 210, 297);
    doc.addFont('ArialMS', 'Arial', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(20);
    doc.text(`Certificate of Completion`, 75, 62);
    doc.setFontSize(15);
    doc.text(`${userName || this.user.name}`, 75, 130);
    doc.text(
      `For successfully completing the ${
        this.module
      } course on: ${new Date().toDateString()}`,
      25,
      180
    );
    doc.save(`${userName || this.user.name}-certificate.pdf`);
  }
}
