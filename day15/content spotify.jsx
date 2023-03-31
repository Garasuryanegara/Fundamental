import { Button, Box, Container, Flex } from "@chakra-ui/react";
import "./main.css";

export default function MainPage() {
  const data = [
    {
      url: "http://www.pianoramix.com/assets/media/298-peaceful-piano-spotify-300x300r.jpeg",
      judul: "Piaceful Piano",
      desc: "Relax and indulge with beautiful piano pieces",
    },
    {
      url: "http://www.pianoramix.com/assets/media/298-peaceful-piano-spotify-300x300r.jpeg",
      judul: "Piaceful Piano",
      desc: "Relax and indulge with beautiful piano pieces",
    },
    {
      url: "http://www.pianoramix.com/assets/media/298-peaceful-piano-spotify-300x300r.jpeg",
      judul: "Piaceful Piano",
      desc: "Relax and indulge with beautiful piano pieces",
    },
    {
      url: "http://www.pianoramix.com/assets/media/298-peaceful-piano-spotify-300x300r.jpeg",
      judul: "Piaceful Piano",
      desc: "Relax and indulge with beautiful piano pieces",
    },
  ];

  return (
    <Box
      width="100vw"
      bgColor="#121212"
      height="100vh"
      maxWidth="100%"
      maxHeight="100%"
    >
      <Box marginLeft={"241px"} height={"100%"} padding={"0px 32px"}>
        <Flex
          height={"350px"}
          flexDir={"column"}
          justifyContent={"space-between"}
        >
          <Box
            height={"38px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Box width={"100px"} className="title1">
              Focus
            </Box>
            <Box className="title2" display={"flex"} alignItems={"center"}>
              Show all
            </Box>
          </Box>

          <Flex
            alignItems={"center"}
            h="100%"
            // height={"500px"}
            // bottom={"0"}
            // bgColor={"red"}
            gap={"20px"}
            // padding={"20px"}
          >
            {data.map((val) => (
              <Card url={val.url} judul={val.judul} desc={val.desc} />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

function Card(props) {
  return (
    <Box width={"205px"} height={"275px"} padding={"10px"} borderRadius={"3px"}>
      <Box height={"185px"} borderRadius={"3px"}>
        <img
          src={props.url}
          alt="cover"
          width={"100%"}
          height={"100%"}
          borderRadius={"8px"}
        />
      </Box>
      <Box height={"30px"} className="judul">
        {props.judul}
      </Box>
      <Box height={"50px"} className="desc">
        {props.desc}
      </Box>
    </Box>
  );
}

