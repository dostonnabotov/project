---
title: Computer Networks
author: Doston Nabotov
date: 2022-06-02
description: All the necessary topics that are covered during Computer Networks lecture. Test reviews and important notes.
img: /assets/images/computer-networks/p2p-architecture.jpg
imgAlt: peer to peer architecture
tags: ["IT", "computer networks", "featured"]
---

## Table of Contents

- [OSI Model](#osi-model)
  - [Cables](#cables)
  - [Tools](#tools)
- [Layers](#seven-layers)
    - [Application Layer](#application-layer)
      - [Network Architecture](#network-architecture)
      - [DNS](#dns)
    <!-- - [Transport Layer](#transport-layer)
    - [Network Layer](#network-layer)
    - [Data access Layer](#data-access-layer)
    - [Physical Layer](#physical-layer)  -->
<!-- - [Security](#security)
- [Real-time](#real-time) -->
- [Test Reviews](#test-reviews)
- [References](#references)

## OSI model <a name="osi-model"></a>

**`Transmission delay(s) = distance (m) / speed of light (m/s)`**

**Example**: Riga - California ~ 9000 km

Delay = 9 000 000 (m) / 300 000 000 (m/s) = 0.03s = 30ms

_30 ms minimal theoretical delay from Riga to California_

### Cables <a name="cables"></a>

- **Twisted pair**

![twisted pair](/assets/images/computer-networks/twisted-pair.jpg)

**Twisted pair** cabling is a type of wiring in which two conductors of a single circuit are twisted together for the purposes of improving electromagnetic compatibility. Compared to a single conductor or an untwisted balanced pair, a twisted pair reduces electromagnetic radiation from the pair and crosstalk between neighboring pairs and improves rejection of external electromagnetic interference.

For additional noise immunity, twisted-pair cabling may be shielded. Cable with shielding is known as shielded twisted pair (STP) and without as unshielded twisted pair (UTP). `[1]`

- **Coaxial**

![coaxial cable](/assets/images/computer-networks/coaixal-cable.jpg)

**Coaxial cable** is a type of transmission line, used to carry high-frequency electrical signals with low losses. It is used in such applications as telephone trunk lines, broadband internet networking cables, high-speed computer data busses, cable television signals, and connecting radio transmitters and receivers to their antennas.

It differs from other shielded cables because the dimensions of the cable and connectors are controlled to give a precise, constant conductor spacing, which is needed for it to function efficiently as a transmission line. `[2]`

- **Optical fiber**

![optical fiber](/assets/images/computer-networks/optical-fiber.jpg)

An **optical fiber** is a flexible, transparent fiber, being around a diameter slightly thicker than that of a human hair.

Optical fibers are used most often as a means to transmit light between the two ends of the fiber and find wide usage in fiber-optic communications, where they permit transmission over longer distances and at higher bandwidths (data transfer rates) than electrical cables.

Fibers are used instead of metal wires because signals travel along them with less loss. `[3]`

### Tools

**ping - tool for testing TCP/IP network**

Start → Run → cmd → ping

Parameters: `ping target_name`

Example:

    ping 127.0.0.1 vai ping www.rtu.lv

        Reply from 127.0.0.1 : bytes=32 time<1ms TTL=61

**tracert - tool for tracing packet path till server**

Parameters: `tracert target_name`

Example:

    tracert www.rtu.lv

        <1 ms <1 ms <1 ms 85.254.218.254
        1 ms 2 ms 2 ms 192.168.255.65
        2 ms 1 ms 2 ms 192.168.255.13
        <1 ms <1 ms <1 ms 213.175.89.169

**ipconfig - tool for checking computer’s netowrk parameters**

Example:

    ipconfig /all

        Description . . . . . . . . . . . : Intel(R) PRO/100 VE Network
        Connection
        Physical Address. . . . . . . . . : 00-0C-76-14-97-F5
        DHCP Enabled. . . . . . . . . . . : Yes
        IPv4 Address. . . . . . . . . . . : 192.168.6.2(Preferred)
        Subnet Mask . . . . . . . . . . . : 255.255.255.0
        Lease Obtained. . . . . . . . . . : 31 january 2010 10:42:05
        Lease Expires . . . . . . . . . . : 1 february 2010 10:42:11
        Default Gateway . . . . . . . . . : 192.168.6.1
        DHCP Server . . . . . . . . . . . : 192.168.6.1
        DNS Servers . . . . . . . . . . . : 192.168.6.1

Extra: `[/all][/renew][/release]`

**whois - website for getting domain or IP address information**

[whois domain tools](https://whois.domaintools.com/)

## 7 Layers <a name="seven-layers"></a>

1. **Physical** - Media signal and binary transmission
2. **Data Link** - Physical addressing
3. **Network** - Path determination
4. **Transport** - End-to-end connections and reliability
5. **Session** - Interhost communication
6. **Presentation** - Data representation and encryption
7. **Application** - Network process to application

## Application Layer <a name="application-layer"></a>

Service data size is fixed, therefore higher useful data amount will result in higher efficiency

Example:

sending 1000 bytes image, Total packet size with service data = 1093 b

Efficiency = 1000 / 1093 = 91%

### Network Architecture <a name="network-architecture"></a>

**Client-server**

![client-server architecture](/assets/images/computer-networks/client-server-architecture.png)

The **Client-server model** is a distributed application structure that partitions task or workload between the providers of a resource or service, called servers, and service requesters called clients.

In the client-server architecture, when the **client** computer sends a request for data to the server through the internet, the **server** accepts the requested process and deliver the data packets requested back to the client. Clients do not share any of their resources. `[4]`

**Examples**: Email, Facebook, Firefox, World Wide Web and etc.

**Peer-to-peer (P2P)**

![Peer-to-peer Architecture](/assets/images/computer-networks/p2p-architecture.jpg)

**Peer-to-peer (P2P)** computing or networking is a distributed application architecture that partitions tasks or workloads between peers.

Peers make a portion of their resources, such as processing power, disk storage or network bandwidth, directly available to other network participants, without the need for central coordination by servers or stable hosts.

Peers are both suppliers and consumers of resources, in contrast to the traditional client–server model in which the consumption and supply of resources is divided. `[5]`

**Examples**: Skype, World of Warcraft gaming, BitTorrent

### DNS <a name="dns"></a>

- **SMTP** - Simple Mail Transfer Protocol
- **POP3** - Post Office Protocol v3, e.g. `inbox.lv`
- **IMAP** - Internet Message Access Protocol, e.g. `gmail.com`
- **DNS** - Domain Name Service

![Local DNS Server](/assets/images/computer-networks/local-dns-server.png)

<!-- ## Transport Layer <a name="transport-layer"></a>

## Network Layer <a name="network-layer"></a>

## Data access Layer <a name="data-access-layer"></a>

## Physical Layer <a name="physical-layer"></a>

## Security <a name="security"></a>

## Real-time <a name="real-time"></a> -->

## Test Reviews <a name="test-reviews"></a> 

1. OSI model

    - Data packets on the Internet might not travel by the shortest route from one country to another. **`True`**

    - By using `ipconfig` utility it is possible to identify computer's IP address. **`True`**

    - By using `ping` utility is possible to define distance till the server. **`False`** *(it is a tool for testing TCP/IP network)*

    - The only reason for the packets transmission delay is processing time in network devices (routers/switches/servers). **`False`** *(it depends on distance)*

2. Application Layer

    - Cookies allow to trace user historical acivity on web page. **`True`**

    - Proxy servers are used only to hide own identity. **`False`**

    - Torrents use peer-to-peer data communication principle. **`True`**
    

## References

`[1]` - [Twisted pair](https://en.wikipedia.org/wiki/Twisted_pair) <br>
`[2]` - [Coaxial cable](https://en.wikipedia.org/wiki/Coaxial_cable) <br>
`[3]` - [Optical fiber](https://en.wikipedia.org/wiki/Optical_fiber) <br>
`[4]` - [Client-server Architecture](https://www.geeksforgeeks.org/client-server-model/) <br>
`[5]` - [Peer-to-peer Architecture](https://en.wikipedia.org/wiki/Peer-to-peer) <br>
