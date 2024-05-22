import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { Box } from "@gluestack-ui/themed";

export function Routes() {
    return (
        <Box flex={1} bg="$trueGray800">
            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>
        </Box>
    )
}