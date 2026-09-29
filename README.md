<div align="center">
  <h1>Trần Hoàng Anh Vũ</h1>
  <p><strong>Computer Networks & Communications Student · Infrastructure · Network · Cloud</strong></p>
  <p>Văn Hiến University · Ho Chi Minh City, Vietnam</p>
  <p><a href="https://concavu.github.io/vu-tran-portfolio/">🌐 Open the live portfolio preview</a> · <a href="https://github.com/concavu">GitHub profile</a></p>
</div>

## Portfolio preview

[View the responsive dark-theme website](https://concavu.github.io/vu-tran-portfolio/)

## About

I’m studying **Computer Networks and Communications** at Văn Hiến University (2023–2027). I’m interested in network infrastructure, Linux administration, private cloud, security monitoring, and software and web development. I enjoy turning technical concepts into clear, documented systems and learning by building projects.

## Selected projects

### Enterprise Network Infrastructure Design

Designed and configured a Cisco Packet Tracer enterprise topology for headquarters, a DMZ server farm, and a branch office connected over a simulated WAN.

- Hierarchical core and access switching with VLANs, IEEE 802.1Q trunks, and inter-VLAN routing
- OSPF Area 0 between HQ, edge router, and branch; LACP EtherChannel uplink redundancy
- DMZ services, ACLs, NAT overload, and wireless access

### Enterprise Private Cloud & Observability Platform

Designed a containerized private-cloud storage environment using Docker Compose and layered network isolation.

- Nginx reverse-proxy edge in 172.20.10.0/24; isolated Nextcloud, MariaDB, and Redis backend in 172.20.20.0/24
- MinIO S3 object storage in 172.20.30.0/24
- Prometheus and Grafana for resource and service monitoring

### AI Camera Intrusion Monitoring (team project)

Built a network programming course prototype with a student team: a C# client-server camera monitoring system with AI-assisted person detection.

- Webcam capture and JPEG frame transport over UDP on a local network
- OpenCvSharp, YOLOv8, and ONNX Runtime for frame analysis
- Asynchronous SMTP alert workflow with evidence snapshots; TCP/UDP and multithreading considerations

## Technical toolkit

| Area | Technologies and skills |
| --- | --- |
| Networking | Cisco Packet Tracer, routing and switching, VLAN, 802.1Q, OSPF, LACP, ACL, NAT |
| Systems & cloud | Linux, Docker, Nginx, Nextcloud, MariaDB, Redis, MinIO |
| Monitoring & security | Prometheus, Grafana, network monitoring, YOLOv8, ONNX Runtime |
| Programming & web | C++, Python, Java, PHP, JavaScript, HTML, CSS, C# coursework |
| Tools & platforms | Git, GitHub, VS Code, Odoo Online, Docker Desktop |
| Language | English: technical reading, communication, and working with international documentation |

## Education & activities

- **Văn Hiến University** — Computer Networks and Communications, 2023–2027 (expected)
- Participant, Automotive Hackathon 2026 (Hà Nội) and UniHackfest 2026
- Volunteer blood donor, **Chủ Nhật Đỏ** (2025 and 2026); community charity run (2025)
- Exploring a web app workflow for extracting YouTube content, generating multilingual subtitles, and clipping videos (2026)
- MiniPay | Celo Community Mixer
## Contact

- GitHub: [@concavu](https://github.com/concavu)
- Phone: [0856 865 932](tel:+84856865932)
- Gmail: [stanhvu123456@gmail.com](stanhvu123456@gmail.com)
---

## Run locally

```bash
npm install
npm run dev
```

To create a production build, run `npm run build`.
