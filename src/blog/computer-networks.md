---
title: OSI Model
author: Doston Nabotov
date: 2022-06-14
description: All the necessary topics regarding OSI Model that are covered during Computer Networks lecture. Test reviews and important notes.
img: /assets/images/computer-networks/p2p-architecture.jpg
imgAlt: peer to peer architecture
tags: ["IT", "computer networks", "featured"]
---

## OSI model

----

<abbr title="Open System Interconnection">OSI</abbr> model is used to define how the data is transferred from one computer to another. In order to accomplish successful communication between computers or networks, 7 layers are created by International Organization for standardization in 1984. 

7 Layers:

1. **Physical** - Media signal and binary transmission
2. **Data Link** - Physical addressing
3. **Network** - Path determination
4. **Transport** - End-to-end connections and reliability
5. **Session** - Interhost communication
6. **Presentation** - Data representation and encryption
7. **Application** - Network process to application

> Each layer is a package of protocol. Application does not mean that it includes applications like Chrome or Firefox, but rather protocols that are needed to make these applications work correctly.

## Application Layer

----

In general terms, **Application Layer** makes the recieved data from other layers visible on computer screen.

It uses application protocols, like <abbr title="Hypertext Transfer Protocol">HTTP</abbr>, <abbr title="Hypertext Transfer Protocol Secure">HTTPS</abbr>, <abbr title="File Transfer Protocol">FTP</abbr> and more.

- **File Transfer** - done with the help FTP
- **Web Surfing** - done with the help HTTP/s
- **Emails** - done with the help SMTP
- **Virtual Terminals** - done with the help Telnet

### Transmission Delay

**`Transmission delay(s) = distance (m) / speed of light (m/s)`**

**Example**: Riga - California ~ 9000 km

Delay = 9 000 000 (m) / 300 000 000 (m/s) = 0.03s = 30ms

_30 ms minimal theoretical delay from Riga to California_

### Network Architecture 

**Client-server**

![client-server architecture](/assets/images/computer-networks/client-server-architecture.png)

The **Client-server model** is a distributed application structure that partitions task or workload between the providers of a resource or service, called servers, and service requesters called clients.

In the client-server architecture, when the **client** computer sends a request for data to the server through the internet, the **server** accepts the requested process and deliver the data packets requested back to the client. Clients do not share any of their resources. <sup> `[4]` </sup>

**Examples**: Email, Facebook, Firefox, World Wide Web and etc.

**P2P (Peer-to-peer)**

![Peer-to-peer Architecture](/assets/images/computer-networks/p2p-architecture.jpg)

<abbr title="Peer-to-peer">P2P</abbr> computing or networking is a distributed application architecture that partitions tasks or workloads between peers.

Peers make a portion of their resources, such as processing power, disk storage or network bandwidth, directly available to other network participants, without the need for central coordination by servers or stable hosts.

Peers are both suppliers and consumers of resources, in contrast to the traditional client–server model in which the consumption and supply of resources is divided. <sup> `[5]` </sup>

**Examples**: Skype, World of Warcraft gaming, BitTorrent

### DNS 

- **SMTP** - Simple Mail Transfer Protocol
- **POP3** - Post Office Protocol v3, e.g. `inbox.lv`
- **IMAP** - Internet Message Access Protocol, e.g. `gmail.com`
- **DNS** - Domain Name Service

![Local DNS Server](/assets/images/computer-networks/local-dns-server.png)

## Presentation Layer

----

It performs 3 main operations:

1. Translation
2. Data Compression
3. Encryption / Decryption

### Translation

It recieves the data from Application Layer. This data is usually the form of numbers and characters. And, it converts these into machine understandable formats.


e.g. <abbr title="American Standard Code for Information Interchange">ASCII</abbr> &rarr; <abbr title="Extended Binary Coded Decimal Interchange Code">EBCDIC</abbr>


### Data Compression

It reduces the numbers of bits that are used in original data.
Reduces the amount of space, and save time. Very helpful for real-time video and audio streaming

However, data can be:

- Lossy
- Loseless


### Encryption / Decryption

it enhances security of the data. In the sender's side, the data is encrypted, while on the reciever's side, it is back decrypted.

<abbr title="Secure Socket Layer">SSL</abbr> is used for encryption and decryption



## Session Layer

----

When computer connects with server, the server performs 3 main operations:

1. Authentication
2. Authorization
3. Session Management

### Authentication

Server uses username and password to perform the process of verifying who you are. Once it matches, the connection is established between the user and server.

### Authorization

It is the process of whether you have permission to have access to the site/page

### Session Management

Session Layer keeps track of data downloaded (such as *text files, images and e.t.c*) as well as which data packets belong to text files or image files. In the user's side, the data is received as data packets.

<abbr title="Application Programming Interface">APIs</abbr>, <abbr title="Network Basic Input/Output System">NetBIOS</abbr> allow applications in different computers.

## Transport Layer

----

Protocols:

- **TCP** - Transmission Control Protocol
- **UDP** - User Datagram Protocol

Services:

- Connection-oriented Transmission ==> TCP
- Connectionless Transmission ==> UDP

Service data size is fixed, therefore higher useful data amount will result in higher efficiency

Example:

sending 1000 bytes image, Total packet size with service data = 1093 b

Efficiency = 1000 / 1093 = 91%

It controls the reliability of communication through three ways:

1. Segmentation
2. Flow Control
3. Error Control

Transport Layer passes the data to Network Layer.

### Segmentation

The data recieved from Session Layer is divided into small data units, called **segments**. Each segment contains a source, destination port number and a sequence number.

Port number helps to direct each segment to the correct application

Sequence number helps to reassemble the segments in the correct order to form correct message at the reciever.

### Flow Control

Transport Layer controls the amount of data being transmitted. 

Example: 

Consider our mobile phone is connected to server. Suppose the server can transmit data maximum 100 Mbps, and our mobile can process data maximum 10 Mbps. Now, we are downloading the file from servers. 

Server starts to send 50 Mbps, which is greater than our mobile can proces. So, mobile phone with the help of **Transport Layer** can tell the server the slow down the transmission rate up to 10 Mbps, so no data is lost.

Server sends 5 Mbps. And mobile phone can tell the server to increase the data trasmission rate up to 10 Mbps to maintain system performance.

### Error Control

If some data does not arrive the destination, Transport Layer uses **Automatic Repeat Request** to retransmit the lost or corrupted data. A group of bits, called **Checksum** is added to each segment to find missing data.


![TCP and UDP](/assets/images/computer-networks/tcp-and-udp.jpg)

### TCP

**TCP**, which stands for **Transmission Control Protocol**, is the most common networking protocol online. TCP is extremely reliable, and is used for everything from surfing the web (HTTP), sending emails (SMTP), and transferring files (FTP). For example, when you visit a website, TCP is used to guarantee that everything from the text, images, and code needed to render the page arrives. `[6]`

TCP is a **connection-oriented protocol**, meaning that it establishes a connection between two devices before transferring data, and maintains that connection throughout the transfer process.

To establish a connection between two devices, TCP uses a method called a three-way handshake.

Overall, despite being slower than UDP, in TCP, Feedback is provided and lost data can be retranmitted.

Example: WWW, Email, FTP

![TCP three way handshake](/assets/images/computer-networks/tcp-three-way-handshake-simple.png)

### UDP

**UDP**, which stands for **User Datagram Protocol**, another one of the major protocols that make up the internet protocol suite. UDP is less reliable than TCP, but is much simpler. `[6]`

It is a **connectionless protocol**, meaning that it does not establish a connection beforehand like TCP. UDP doesn't guarantee that all data is successfully transferred.

UDP is the better choice for **live video or streaming media** and **audio or online games** where speed is more important than potential data loss.

Overall, even though becoming faster protocol than TCP, it does not provide feedback on data.

Example: Online Streaming movies, Video games, songs, TFTP, DNS

### Efficiency 

What is the **efficiency** of TCP/UDP?

*Physical packet limit* ≅ 1500 bytes

*Service overhead*: UDP – 8 bytes, TCP – 20 bytes

**`Efficiency = useful data data / total size`**

`useful data = total size - overheads`

**UDP max efficiency = 1500−8 / 1500 ≅ 99.5%**

**TCP max efficiency = 1500−20 / 1500 ≅ 98.7%**
 

## Network Layer 

----

Network Layer works on transmission of packets from one computer to another in different networks.
Data units in Network Layer are called ***packets***.  It is where routers are resided.

Private address range is ONLY found in <abbr title="Local Area Network">LAN</abbr>, never in Internet.

Commands for editing routes in Windows:

- Check existing routes - `route print`
- Delete route - `route delete x.x.x.x`
- Add route - `route add 0.0.0.0 mask 0.0.0.0 10.1.1.1 metric 10`

IPv4 address problems

- Network nodes increase
- Mobile devices
- Always on devices
- Internet usage increase
- Inefficient address policies
- Virtualization

It performs 3 main functions:

1. Logical Addressing
2. Path Determination
3. Routing

### Logical Addressing

IPv4 & IPv6

Every computer in a network has a unique IP address. Network Layer assigns IP addresses to segment to form a IP packet. IP address is assigned to ensure that each data is reached to the correct destination


### Path Determination

Computer can be connected to internet server in a number of ways. Choosing the best path for data delivery is called Path determination. 


Layer 3 devices use protocols, such as <abbr title="Open Shortest Path First">OSPF</abbr>, <abbr title="Border Gateway Protocol">BGP</abbr> and <abbr title="Intermediate System to Intermediate System">IS-IS</abbr> to determine the best possible path for data delivery.


### Routing

It is a method of moving data packets from source to destination. It is based on Logical Addressing of format IPv4 & IPv6.


when sending packets, server has already added sender's and receiver's IP address. Mask `225.225.225.0` tells that the first three combination represents network, and last combination represents host or a computer. So, with mask and IP address, packets first go to Network, then computer


## Data Link Layer

----

It recieves data packets from Network Layer. Data Packets contain IP addresses of sender and reciever.

Data Link Layer s embedded as software in <abbr title="Network Interface Card">NIC</abbr> of a computer. It provided means to transfer data from one computer to another via a local media.

Local media includes:

- Copper wire
- Optical fiber
- Air 

Media refers to the physical links between two or more computers or networks.

Data Link Layer perfoms 2 basic functions:

- It allows upper layers of OSI model to access the media using techniques, such as Framing
- Controls how data is placed and received from the media using techniques, such as **<abbr title="Media Access Control">MAC</abbr>** or **Error Detection**

When sending the data from one computer to another, Data Link Layer add some data in the head and tail of IP packet, and converts into a frame

Data Link Layer keeps track of time when the shared media is free, so that device can transmit data for the receiver. It is called <abbr title="Carrier Sense Multiple Access">CSMA</abbr>.

<abbr title="Media Access Control">MAC</abbr> address is found only inside LAN. To send data outside LAN, should use IP

<abbr title="Media Access Control">MAC</abbr> address first 3 bytes - manufacturer code

- **FDMA** - Frequency Division Multiple Access
  - Hear different musical instruments at the same time

- **SDMA** - Space division multiple access
  - Move away from speakers

- **CSMA**, Token - Packet mode methods
  - Wait and repeat talking, pass microphone

- **TDMA** - Time Division Multiple Access
  - Speak one after another

- **CDMA** - Code Division Multiple Access
  - Speak different languages

**ALOHA** - transmit till data is received

More users - less efficiency. Since collision probability increases and requires repeated transmit

**CSMA** - check media before sending, therefore minimizes collision possibility

No collisions
	- FDMA — divided by frequencies
	- TDMA — divided by time on the same frequency
	- Space – nodes separated by distance (no signal received)

Collision avoidance: CSMA — same frequency, uses random access

### Logical Addressing

It is done at Network Layer where sender and receiver's IP addresses are assigned to each segement to form a data packet


### Physical Addressing

It is done at Data Link Layer where MAC addresses of sender and reciever are assigned to each data packet to form a frame.

MAC address is a 12-digit alphanumeric number embedded in network interface card of your computer by your computer manufacturer.

## Physical Layer

----

It converts sequence of binary zeros and ones into signal and transmit over Local Media. It can be:

- **Electrical signal** in case of copper cable or LAN cable
- **Light signal** in case of optical fiber
- **Radio signal** in case of air

## Security

----

Brute forcing is hard, since 1026 combinations. But using specific language statistics, words can be decoded.

### Symmetric Key

Each symbol is encoded differently depending on neighbours symbols

Advantages: 
	- Fast encoding as compared with asymmetric
	- If key is lost, other partners are not affected

Disadvantages: 
	- Safe channel should be used beforehand, to exchanged keys
	- Each pair should have their own key
	- Cannot identify sender
	- Not guarantees integrity

### Asymmetric key (RSA)

Advantages: 
	- No need to hide public key
	- Additional identification of sender
	- Verifies integrity

Disadvantages: 
	- Should be some safe authority for verifying public key
	- Encoding is slower if compared with symmetric
	- If secret key is lost, it is not possible to restore

### Hybrid coding

   1. Create safe channel by using public key.
   2. By using newly created channel, exchange symmetric keys.
   3. Continue data exchange by using efficient symmetric key, changing it at some intervals.
   4. In the result – safe, fast, and efficient data exchange.


## Real-time

----

### Latency (acceptable delays)

- video - audio -> 80ms
- video - text -> 240ms
- audio - text -> 240ms
- audio - image -> 500ms
- audio - mouse cursor -> 500ms

| Perceived Quality | Latency        |
|-------------------|----------------|
| Excellent         | 0 to 150ms     |
| Good              | 150ms to 300ms |
| Poor              | 300ms to 450ms |
| Unacceptable      | above 450ms    |


**CSMA vs TDMA**

CSMA cannot guarantee stable jitter due to the random
nature of sending probability.

TDMA uses a dedicated transmission sequence


## Cables

----

<details>
    <summary>Twisted pair</summary>

![twisted pair](/assets/images/computer-networks/twisted-pair.jpg)

**Twisted pair** cabling is a type of wiring in which two conductors of a single circuit are twisted together for the purposes of improving electromagnetic compatibility. Compared to a single conductor or an untwisted balanced pair, a twisted pair reduces electromagnetic radiation from the pair and crosstalk between neighboring pairs and improves rejection of external electromagnetic interference.

For additional noise immunity, twisted-pair cabling may be shielded. Cable with shielding is known as shielded twisted pair (STP) and without <abbr title="Unshielded Twisted Pair">UTP</abbr>. `[1]`

</details>

<details>
    <summary>Coaxial</summary>

![coaxial cable](/assets/images/computer-networks/coaixal-cable.jpg)

**Coaxial cable** is a type of transmission line, used to carry high-frequency electrical signals with low losses. It is used in such applications as telephone trunk lines, broadband internet networking cables, high-speed computer data busses, cable television signals, and connecting radio transmitters and receivers to their antennas.

It differs from other shielded cables because the dimensions of the cable and connectors are controlled to give a precise, constant conductor spacing, which is needed for it to function efficiently as a transmission line. `[2]`

</details>


<details>
    <summary>Optical fiber</summary>

![optical fiber](/assets/images/computer-networks/optical-fiber.jpg)

An **optical fiber** is a flexible, transparent fiber, being around a diameter slightly thicker than that of a human hair.

Optical fibers are used most often as a means to transmit light between the two ends of the fiber and find wide usage in fiber-optic communications, where they permit transmission over longer distances and at higher bandwidths (data transfer rates) than electrical cables.

Fibers are used instead of metal wires because signals travel along them with less loss. `[3]`

</details>



## Tools

----

<details>
    <summary>ping - tool for testing TCP/IP network</summary>

Start → Run → cmd → ping

Parameters: `ping target_name`

Example:

    ping 127.0.0.1 vai ping www.rtu.lv

        Reply from 127.0.0.1 : bytes=32 time<1ms TTL=61

</details>

<details>
    <summary>tracert - tool for tracing packet path till server</summary>

Parameters: `tracert target_name`

Example:

    tracert www.rtu.lv

        <1 ms <1 ms <1 ms 85.254.218.254
        1 ms 2 ms 2 ms 192.168.255.65
        2 ms 1 ms 2 ms 192.168.255.13
        <1 ms <1 ms <1 ms 213.175.89.169

</details>

<details>
    <summary>ipconfig - tool for checking computer’s netowrk parameters</summary>

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

</details>



<details>
    <summary>
        <abbr title="website for getting domain or IP address information">whois</abbr>
    </summary>

[whois domain tools](https://whois.domaintools.com/)

</details>


## Test Reviews 

----

<details>
  <summary>Test Reviews</summary>
  
1. OSI model

    - Data packets on the Internet might not travel by the shortest route from one country to another. **`True`**

    - By using `ipconfig` utility it is possible to identify computer's IP address. **`True`**

    - By using `ping` utility is possible to define distance till the server. **`False`** *(it is a tool for testing TCP/IP network)*

    - The only reason for the packets transmission delay is processing time in network devices (routers/switches/servers). **`False`** *(it depends on distance)*

2. Application Layer

    - Cookies allow to trace user historical acivity on web page. **`True`**

    - Proxy servers are used only to hide own identity. **`False`**

    - Torrents use peer-to-peer data communication principle. **`True`**
    
    
3. Transport Layer
    
    - Which protocol should be used if we do not know useful data type and do care about transmission delays and overhead? **`TCP`**

    - Typical maximal efficiency for TCP packets. **`99%`** *(see the <a href="#efficiency-of-udp-and-tcp">calculation</a> above)*

    - UDP is more efficient, since it not uses ports. **`False`** *(it is more efficient, but there are a total of 65,535 UDP ports)*

4. Network Layer
  
    - What is the minimal information amount required to send packets inside LAN? `MAC address`
  
5. Physical Layer
  
    - Physical layer is located on top of OSI model, at layer #7. **`False`** *it is located on bottom, at layer #1*
  
    - WiFi protocols include OSI layer #1. **`True`** *it operates on the Physical and Data Link layers*
  
    - OSI model has 6 layers. **`False`** *it has 7 layers*
  
    - Typical twisted pair cable has 8 wires inside. **`True`**
  
        ![twisted pair](/assets/images/computer-networks/twisted-pair.jpg)
  
    - Typically twisted pair cable allows long-distance transmission as compared to optical fiber. **`False`**. *Optical fibers permit transmission over longer distances and at higher bandwidths*
  
    - Optical fibers are usually twisted inside the cable. **`False`**

	
6. Security

    - Symmetric encryption is faster than asymmetric. **`True`**
    - All encryption methods use the same key for encoding and decoding. **`False`**
    - Typically, only asymmetric algorithms are used for data transmission on the Internet, since everyone can capture the data. **`False`**. *other algorithms are also used for data tranmission, like symmetric one*
    - The hash function can be used to encrypt and decrypt data. **`False`**. *only used to encrypt data*

</details>

## References

----

<details>
  <summary>References</summary>
  
- `[1]` - [Twisted pair](https://en.wikipedia.org/wiki/Twisted_pair)
- `[2]` - [Coaxial cable](https://en.wikipedia.org/wiki/Coaxial_cable)
- `[3]` - [Optical fiber](https://en.wikipedia.org/wiki/Optical_fiber)
- `[4]` - [Client-server Architecture](https://www.geeksforgeeks.org/client-server-model/)
- `[5]` - [Peer-to-peer Architecture](https://en.wikipedia.org/wiki/Peer-to-peer)
- `[6]` - [TCP and UDP](https://www.freecodecamp.org/news/tcp-vs-udp/)

</details>
