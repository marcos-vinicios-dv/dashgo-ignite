import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcos Vinicios</Text>
          <Text color="gray.300" fontSize="small">
            marcosviniciosdev13@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Marcos Vinicios" />
    </Flex>
  );
};
