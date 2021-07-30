import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { SideBar } from '../../components/Sidebar';

const UserList = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr color="gray.300" w="8">
                <Th px={['3', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={['3', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marcos Vinicios</Text>
                    <Text fontSize="sm" color="gray.300">
                      marcosviniciosdev13@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 3031</Td>}
              </Tr>
              <Tr>
                <Td px={['3', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marcos Vinicios</Text>
                    <Text fontSize="sm" color="gray.300">
                      marcosviniciosdev13@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 3031</Td>}
              </Tr>
              <Tr>
                <Td px={['3', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marcos Vinicios</Text>
                    <Text fontSize="sm" color="gray.300">
                      marcosviniciosdev13@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && <Td>04 de abril, 3031</Td>}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
