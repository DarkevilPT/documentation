---
sidebar_label: "Before start"
sidebar_position: 5
---

# Preparation

This guide is designed for ROCK 3C enthusiast. The purpose is to learn about ROCK 3C as well as how to prepare and set up for basic use.
When you get a board, you need to know what model it is and which hardware version it is. The information is printed in the top side of the board.
We will introduce the board information as much as possible.

## Necessary

- ROCK 3C main board

- One of the Storage media below:  
  microSD card, at least 8GB  
  [eMMC module](/accessories/emmc_module), at least 8GB

- Power Supply:  
  The ROCK 3 is powered by Type-C port and support 5V input only. The suggested power adapter is 5V/3A when using without SSD, 5V/5A when using with SSD.  
  :::tip
  The official recommendation is to use [Radxa Power PD30W](/accessories/pd_30w).
  :::

- USB Keyboard and Mouse  
  With four USB-A connectors, ROCK 3C can be equipped with a full sized keyboard and mouse.

- Monitor and HDMI Cable  
  ROCK 3C is equipped with a full sized HDMI connector. HDMI capable monitor is recommended.  
  And it supports up to 1080P resolution.

- microSD Card Reader  
  For flashing the image to the micro SD Card

## Optional

- USB type A to type A cable:  
  This is needed for fastboot/adb commands and the maskrom mode for advanced flashing.

- USB to TTL serial cable:  
  This is needed for [serial console](/general-tutorial/serial).

- Ethernet cable  
  ROCK 3C supports Internet access via WIFI or Ethernet.  
  An Ethernet cable is used to connect your ROCK 3 to a local network and the Internet.

- Camera Module  
  ROCK 3C supports camera function.

- LCD Module  
  ROCK 3C supports 2-lanes MIPI DSI display function.  
  :::tip
  The official recommendation is to use [Radxa Display 8 HD](/accessories/lcd-8-hd) or [Radxa Display 10 HD](/accessories/lcd-10-hd)
  :::

- Audio cable  
  Audio can be played through speaker or headphones using a standard 3.5mm jack.

## OS Installation

First, choose the [official image](/rock3/official-images) that you want to flash and download it.

Then, flash the image to the storage media by refering the [OS Installation guide](/general-tutorial/os-installation).

Finally, insert the system storage media, microSD Card or eMMC Module into the socket on the board and power on ROCK 3C by adapter with Type-C port.
