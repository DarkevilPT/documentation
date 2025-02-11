---
sidebar_label: "ROCK 4 系列 GPIO 定义"
sidebar_position: 50
---

# ROCK 4 系列 GPIO 定义

## GPIO 电压

RK3399 和 OP1 有三种 IO 电压：1.8V/3.0V/3.3V。以下是默认电压：

| GPIO       | Voltage Level | Tolerance |
| ---------- | ------------- | --------- |
| GPIO3_C0   | 3.3V          | 3.465V    |
| ADC_IN0    | 1.8V          | 1.98V     |
| Other GPIO | 3.0V          | 3.14V     |

## GPIO 接口

ROCK 4 系列有一个 40 引脚的扩展针座。每个引脚用颜色区分。
以下引脚布局适用于 ROCK 4 系列的所有产品。

<div className='gpio_style'>

:::caution
并非所有硬件功能都可以同时开启。同一时间，一个引脚只能被分配一个硬件功能。
:::

| GPIO number | Function2 |               Function1                |   GPIO   |               Pin#               |              Pin#               |   GPIO   |                Function1                | Function2  | GPIO number |
| :---------: | :-------: | :------------------------------------: | :------: | :------------------------------: | :-----------------------------: | :------: | :-------------------------------------: | :--------: | :---------: |
|             |           |                 +3.3V                  |          | <div className='yellow'>1</div>  |  <div className='red'>2</div>   |          |                  +5.0V                  |            |             |
|     71      |           |                I2C7_SDA                | GPIO2_A7 |  <div className='green'>3</div>  |  <div className='red'>4</div>   |          |                  +5.0V                  |            |             |
|     72      |           |                I2C7_SCL                | GPIO2_B0 |  <div className='green'>5</div>  | <div className='black'>6</div>  |          |                   GND                   |            |             |
|     75      |           |                SPI2_CLK                | GPIO2_B3 |  <div className='green'>7</div>  | <div className='green'>8</div>  | GPIO4_C4 | <div className='orange'>UART2_TXD</div> |            |     148     |
|             |           |                  GND                   |          |  <div className='black'>9</div>  | <div className='green'>10</div> | GPIO4_C3 | <div className='orange'>UART2_RXD</div> |            |     147     |
|     146     |           |                  PWM0                  | GPIO4_C2 | <div className='green'>11</div>  | <div className='green'>12</div> | GPIO4_A3 |                I2S1_SCLK                |            |     131     |
|     150     |           |                  PWM1                  | GPIO4_C6 | <div className='green'>13</div>  | <div className='black'>14</div> |          |                   GND                   |            |             |
|     149     |           |                SPDIF_TX                | GPIO4_C5 | <div className='green'>15</div>  | <div className='green'>16</div> | GPIO4_D2 |                                         |            |     154     |
|             |           |                 +3.3V                  |          | <div className='yellow'>17</div> | <div className='green'>18</div> | GPIO4_D4 |                                         |            |     156     |
|     40      | UART4_TXD | <div className='orange'>SPI1_TXD</div> | GPIO1_B0 | <div className='green'>19</div>  | <div className='black'>20</div> |          |                   GND                   |            |             |
|     39      | UART4_RXD | <div className='orange'>SPI1_RXD</div> | GPIO1_A7 | <div className='green'>21</div>  | <div className='green'>22</div> | GPIO4_D5 |                                         |            |     157     |
|     41      |           | <div className='orange'>SPI1_CLK</div> | GPIO1_B1 | <div className='green'>23</div>  | <div className='green'>24</div> | GPIO1_B2 | <div className='orange'>SPI1_CSn</div>  |            |     42      |
|             |           |                  GND                   |          | <div className='black'>25</div>  | <div className='green'>26</div> |          |                 ADC_IN0                 |            |             |
|     64      |           |                I2C2_SDA                | GPIO2_A0 |  <div className='blue'>27</div>  | <div className='blue'>28</div>  | GPIO2_A1 |                I2C2_CLK                 |            |     65      |
|     74      | I2C6_SCL  |                SPI2_TXD                | GPIO2_B2 | <div className='green'>29</div>  | <div className='black'>30</div> |          |                   GND                   |            |             |
|     73      | I2C6_SDA  |                SPI2_RXD                | GPIO2_B1 | <div className='green'>31</div>  | <div className='green'>32</div> | GPIO3_C0 |                SPDIF_TX                 | UART3_CTSn |     112     |
|     76      |           |                SPI2_CSn                | GPIO2_B4 | <div className='green'>33</div>  | <div className='black'>34</div> |          |                   GND                   |            |             |
|     133     |           |              I2S1_LRCK_TX              | GPIO4_A5 | <div className='green'>35</div>  | <div className='green'>36</div> | GPIO4_A4 |              I2S1_LRCK_RX               |            |     132     |
|     158     |           |                                        | GPIO4_D6 | <div className='green'>37</div>  | <div className='green'>38</div> | GPIO4_A6 |                I2S1_SDI                 |            |     134     |
|             |           |                  GND                   |          | <div className='black'>39</div>  | <div className='green'>40</div> | GPIO4_A7 |                I2S1_SDO                 |            |     135     |

</div>

## 关于 40 pin 连接座的说明

- 标有橙色的功能是该引脚的默认功能。
- 除电源引脚外，所有引脚都直接连接到 SoC。
- 对于引脚 3、5、27、28、29 和 31，每个引脚都通过一个 4.7K 上拉电阻与 3.0V 电源相连。
- 引脚 7 直接连接到板上的 MIPI CSI 引脚。
- SPI
  - 引脚 19、21、23、24 也连接到电路板上的 SPI 闪存引脚。如果 ROCK 4 系列板上焊接了 SPI 闪存，则 GPIO 针座上不提供 SPI 功能。
- UART
  - UART2 默认启用为 U-boot 和 Linux 串行控制台。选中 Rockpi4/dev/serial-console 即可使用。选中 Rockpi4/hardware/devtree_overlays 来禁用 UART2 上的串行控制台。
  - UART2 和 UART4 支持多种波特率。包括但不限于以下波特率：115200bps。500000bps、1500000bps 等。
  - 某些板子的板载 SPI 闪存已焊接，UART4 引脚用于 SPI 功能。
- 对于 I2C-2 和 I2C-7
  - 我们已经使用 i2c 设备 e2prom 进行测试。我们需要打开 i2c 设备文件，然后进行读或写操作。

## GPIO 编号

如果你需要获取 GPIO 编号，请参阅 [GPIO 编号介绍](/general-tutorial/gpio-num)。
